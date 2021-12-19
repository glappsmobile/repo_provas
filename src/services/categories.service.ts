import { getRepository } from 'typeorm';
import CategoriesEntity from '../entities/CategoriesEntity';

const findCategories = async () => {
  const categories = await getRepository(CategoriesEntity)
    .find();

  return categories;
};

export {
  findCategories,
};
