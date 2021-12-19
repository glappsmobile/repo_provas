/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { statusCode } from '../enums/httpStatus';

const serverError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log(error);
  res.sendStatus(statusCode.INTERNAL_SERVER_ERROR);
};

export default serverError;
