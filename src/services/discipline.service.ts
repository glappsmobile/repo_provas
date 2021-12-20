import { getManager } from 'typeorm';

const findDisciplines = async () => {
  const disciplines = await getManager().query(
    `SELECT
      disciplines.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE tests.discipline_id = disciplines.id
      ) AS tests
    FROM disciplines;`,
  );

  return disciplines.map((discipline: any) => ({
    id: discipline.id,
    name: discipline.name,
    testsCount: discipline.tests ? discipline.tests.length : 0,
  }));
};

export {
  findDisciplines,
};
