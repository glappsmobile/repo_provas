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

const findTestsByDisciplineId = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (testValidation.findTestsByDisciplineId.validate(req.params).error) {
    return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
  }

  const disciplineId = Number(req.params.disciplineId);

  try {
    const tests = await testService.findTestsByDisciplineId(disciplineId);

    if (tests.length === 0) {
      return res.status(statusCode.NOT_FOUND).send('Discipline not found.');
    }

    return res.send(tests);
  } catch (error) {
    next(error);
  }
};

const findTestsByTeacherId = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (testValidation.findTestsByTeacherId.validate(req.params).error) {
    return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
  }

  const teacherId = Number(req.params.teacherId);

  try {
    const tests = await testService.findTestsByTeacherId(teacherId);

    if (tests.length === 0) {
      return res.status(statusCode.NOT_FOUND).send('Teacher not found.');
    }

    return res.send(tests);
  } catch (error) {
    next(error);
  }
};

export {
  createTest,
  findTests,
  findTestsByDisciplineId,
  findTestsByTeacherId,
};
