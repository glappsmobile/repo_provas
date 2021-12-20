import './setup';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import serverError from './middlewares/serverError.middleware';
import connectDatabase from './database/connectDatabase';
import disciplineRouter from './routers/discipline.router';
import teacherRouter from './routers/teacher.router';
import categoryRouter from './routers/category.router';
import testRouter from './routers/test.router';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/disciplines', disciplineRouter);

app.use('/teachers', teacherRouter);

app.use('/categories', categoryRouter);

app.use('/tests', testRouter);

app.use(serverError);

export async function init() {
  await connectDatabase();
}

export default app;
