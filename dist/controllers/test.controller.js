var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { statusCode } from '../enums/httpStatus';
import * as testService from '../services/test.service';
import * as testValidation from '../validations/test.validation';
import InternalError from '../errors/InternalError';
import TestError from '../errors/TestError';
const createTest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (testValidation.createTest.validate(req.body).error) {
        return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
    }
    const { url, name, year, semester, categoryId, teacherId, disciplineId, } = req.body;
    try {
        yield testService
            .createTest({
            url,
            name,
            year,
            semester: Number(semester),
            categoryId,
            teacherId,
            disciplineId,
        });
        return res.sendStatus(201);
    }
    catch (error) {
        if (error instanceof InternalError) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
        }
        if (error instanceof TestError) {
            return res.status(statusCode.BAD_REQUEST).send(error.message);
        }
        next(error);
    }
});
const findTests = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tests = yield testService.findTests();
        return res.send(tests);
    }
    catch (error) {
        next(error);
    }
});
const findTestsByDisciplineId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (testValidation.findTestsByDisciplineId.validate(req.params).error) {
        return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
    }
    const disciplineId = Number(req.params.disciplineId);
    try {
        const tests = yield testService.findTestsByDisciplineId(disciplineId);
        if (tests.length === 0) {
            return res.status(statusCode.NOT_FOUND).send('Discipline not found.');
        }
        return res.send(tests);
    }
    catch (error) {
        next(error);
    }
});
const findTestsByTeacherId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (testValidation.findTestsByTeacherId.validate(req.params).error) {
        return res.status(statusCode.BAD_REQUEST).send('Body parameter(s) filled incorrectly.');
    }
    const teacherId = Number(req.params.teacherId);
    try {
        const tests = yield testService.findTestsByTeacherId(teacherId);
        if (tests.length === 0) {
            return res.status(statusCode.NOT_FOUND).send('Teacher not found.');
        }
        return res.send(tests);
    }
    catch (error) {
        next(error);
    }
});
export { createTest, findTests, findTestsByDisciplineId, findTestsByTeacherId, };
