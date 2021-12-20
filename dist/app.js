var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import './setup.ts';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import serverError from './middlewares/serverError.middleware';
import connectDatabase from './database/connectDatabase';
import disciplineRouter from './routers/discipline.router';
import teacherRouter from './routers/teacher.router';
import categoryRouter from './routers/category.router';
import testRouter from './routers/test.router';
export function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDatabase();
    });
}
const app = express();
app.use(express.json());
app.use(cors());
app.use('/disciplines', disciplineRouter);
app.use('/teachers', teacherRouter);
app.use('/categories', categoryRouter);
app.use('/tests', testRouter);
app.use(serverError);
export default app;
