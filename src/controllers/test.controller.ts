import { Request, Response, NextFunction } from 'express';
import { AppResponse } from '../interfaces/appResponse.interface';
import { statusCode } from '../enums/httpStatus';
import * as testService from '../services/test.service';
import * as testValidation from '../validations/test.validation';
import InternalError from '../errors/InternalError';
import TestError from '../errors/TestError';

const createTest = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (testValidation.createTest.validate(req.body).error) {
    return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
  }

  const {
    url, name, year, semester, categoryId, teacherId, disciplineId,
  } = req.body;

  try {
    await testService
      .createTest({
        url, name, year, semester, categoryId, teacherId, disciplineId,
      });

    return res.sendStatus(201);
  } catch (error) {
    if (error instanceof InternalError) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }

    if (error instanceof TestError) {
      return res.status(statusCode.BAD_REQUEST).send(error.message);
    }

    next(error);
  }
};

const findTests = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  try {
    const tests = await testService.findTests();

    return res.send(tests);
  } catch (error) {
    next(error);
  }
};

export {
  createTest,
  findTests,
};
