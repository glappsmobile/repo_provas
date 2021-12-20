import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';

import Test from '../protocols/Test';
import InternalError from '../errors/InternalError';

const createTest = async (test: Test): Promise<boolean> => {
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
