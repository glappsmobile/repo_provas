import { Request, Response, NextFunction } from 'express';
import { AppResponse } from '../interfaces/appResponse.interface';
import { statusCode } from '../enums/httpStatus';
import * as testService from '../services/test.service';
import * as testValidation from '../validations/test.validation';

const createTest = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (testValidation.createTest.validate(req.body).error) {
    return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
  }

  const {
    url, name, year, semester, categoryId, teacherId, disciplineId,
  } = req.body;

  try {
    const test = await testService
      .createTest({
        url, name, year, semester, categoryId, teacherId, disciplineId,
      });

    return res.send(test);
  } catch (error) {
    next(error);
  }
};

export {
  createTest,
};
