/* eslint-disable no-param-reassign */
import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';
import DisciplineEntity from '../entities/DisciplineEntity';
import CategoryEntity from '../entities/CategoryEntity';
import TeacherEntity from '../entities/TeacherEntity';
import Test from '../protocols/Test';
import InternalError from '../errors/InternalError';
import TestError from '../errors/TestError';

const createTest = async (test: Test): Promise<boolean> => {
  test.name = test.name.trim();

  const {
    disciplineId, teacherId, categoryId, year, semester, name,
  } = test;

  if (name === '') {
    test.name = `${year}.${semester}`;
  }

  if (year < 1970 || year > 2022) {
    throw new TestError('Invalid year.');
  }

  if (semester !== 1 && semester !== 2) {
    throw new TestError('Invalid semester.');
  }

  const discipline = await getRepository(DisciplineEntity)
    .findOne({ id: disciplineId });

  if (!discipline) {
    throw new TestError(`Discipline ID ${disciplineId} does not exist.`);
  }

  const category = await getRepository(CategoryEntity)
    .findOne({ id: categoryId });

  if (!category) {
    throw new TestError(`Category ID ${categoryId} does not exist.`);
  }

  const teacher = await getRepository(TeacherEntity)
    .findOne({ id: teacherId });

  if (!teacher) {
    throw new TestError(`Teacher ID ${teacherId} does not exist.`);
  }

  const createdTest = await getRepository(TestEntity)
    .insert(test);

  if (createdTest.identifiers.length === 0) {
    throw new InternalError('Unexpected internal error.');
  }

  return true;
};

export {
  createTest,
};
