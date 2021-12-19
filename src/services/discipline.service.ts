import { getRepository } from 'typeorm';
import Discipline from '../entities/DisciplineEntity';

const findDisciplines = async () => {
  const disciplines = await getRepository(Discipline)
    .find();

  return disciplines;
};

export {
  findDisciplines,
};
