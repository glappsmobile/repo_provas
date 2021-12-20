import { Request, Response, NextFunction } from 'express';
import { AppResponse } from '../interfaces/appResponse.interface';
import { statusCode } from '../enums/httpStatus';
import * as teacherService from '../services/teacher.service';
import * as teacherValidation from '../validations/teacher.validation';

const findTeachers = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  try {
    const teachers = await teacherService.findTeachers();

    return res.send(teachers);
  } catch (error) {
    next(error);
  }
};

const findTeachersByDisciplineId = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (teacherValidation.findTeachersByDisciplineId.validate(req.params).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  const disciplineId = Number(req.params.disciplineId);

  try {
    const teachers = await teacherService.findTeachersByDisciplineId(disciplineId);

    return res.send(teachers);
  } catch (error) {
    next(error);
  }
};

export {
  findTeachers,
  findTeachersByDisciplineId,
};
