import { getRepository } from 'typeorm';
import TeacherEntity from '../entities/TeacherEntity';
import TeacherDisciplineEntity from '../entities/TeacherDisciplineEntity';

const findTeachers = async () => {
  const teacher = await getRepository(TeacherEntity)
    .find();

  return teacher;
};

const findTeachersByDisciplineId = async (disciplineId: number) => {
  const teachersDisciplines = await getRepository(TeacherDisciplineEntity)
    .find({
      relations: ['teacher'],
      where: { disciplineId },
    });

  return teachersDisciplines.map((teachersDiscipline) => teachersDiscipline.teacher);
};

export {
  findTeachers,
  findTeachersByDisciplineId,
};
