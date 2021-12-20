import { getRepository } from 'typeorm';
import CategoriesEntity from '../entities/CategoryEntity';

const findCategories = async () => {
  const categories = await getRepository(CategoriesEntity)
    .find();

  return categories;
};

export {
  findCategories,
};
