import { getRepository } from 'typeorm';
import DisciplineEntity from '../entities/DisciplineEntity';

const findDisciplines = async () => {
  const disciplines = await getRepository(DisciplineEntity)
    .find();

  return disciplines;
};

export {
  findDisciplines,
};
