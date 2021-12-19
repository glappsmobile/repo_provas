import { Request, Response, NextFunction } from 'express';
import { AppResponse } from '../interfaces/appResponse.interface';
import * as categoriesService from '../services/categories.service';

const findCategories = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  try {
    const categories = await categoriesService.findCategories();

    return res.send(categories);
  } catch (error) {
    next(error);
  }
};

export {
  findCategories,
};
