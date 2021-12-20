import { getManager } from 'typeorm';

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
  const teachers = await getManager().query(
    `SELECT
      teachers.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE tests.teacher_id = teachers.id
      ) AS tests
    FROM teachers
      JOIN teachers_disciplines
        ON teachers_disciplines.teacher_id = teachers.id
          JOIN disciplines
            ON teachers_disciplines.discipline_id = disciplines.id
    WHERE disciplines.id = $1;`,
    [disciplineId],
  );

  return teachers;
};

export {
  findTeachers,
  findTeachersByDisciplineId,
};
