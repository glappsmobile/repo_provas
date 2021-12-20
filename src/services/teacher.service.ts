import { getRepository, getManager } from 'typeorm';
import TeacherDisciplineEntity from '../entities/TeacherDisciplineEntity';

const findTeachers = async () => {
  const teachers = await getManager().query(
    `SELECT
      teachers.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE tests.teacher_id = teachers.id
      ) AS tests
    FROM teachers;`,
  );

  return teachers.map((teacher: any) => ({
    id: teacher.id,
    name: teacher.name,
    testsCount: teacher.tests ? teacher.tests.length : 0,
  }));
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
