import { Request, Response, NextFunction } from 'express';
import { AppResponse } from '../interfaces/appResponse.interface';
import * as disciplineService from '../services/discipline.service';

const findDisciplines = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  try {
    const discipline = await disciplineService.findDisciplines();

    return res.send(discipline);
  } catch (error) {
    next(error);
  }
};

export {
  findDisciplines,
};
