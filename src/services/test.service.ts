/* eslint-disable no-param-reassign */
import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';
import DisciplineEntity from '../entities/DisciplineEntity';
import CategoryEntity from '../entities/CategoryEntity';
import TeacherEntity from '../entities/TeacherEntity';
import Test from '../protocols/Test';
import InternalError from '../errors/InternalError';
import TestError from '../errors/TestError';

function validURL(str: string) {
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

const createTest = async (test: Test): Promise<boolean> => {
  test.name = test.name.trim();

  const {
    disciplineId, teacherId, categoryId, year, semester, name, url,
  } = test;

  if (!validURL(url)) {
    throw new TestError('Invalid url.');
  }

  if (url.substring(url.length - 4) !== '.pdf') {
    throw new TestError('Url does not point to a PDF file.');
  }

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

const findTests = async () => {
  const tests = await getRepository(TestEntity)
    .find();

  return tests;
};

export {
  createTest,
  findTests,
};