var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-param-reassign */
import { getRepository } from 'typeorm';
import TestEntity from '../entities/TestEntity';
import DisciplineEntity from '../entities/DisciplineEntity';
import CategoryEntity from '../entities/CategoryEntity';
import TeacherEntity from '../entities/TeacherEntity';
import InternalError from '../errors/InternalError';
import TestError from '../errors/TestError';
function validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
        + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
        + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
        + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
        + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
        + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
const createTest = (test) => __awaiter(void 0, void 0, void 0, function* () {
    test.name = test.name.trim();
    const { disciplineId, teacherId, categoryId, year, semester, name, url, } = test;
    if (!validURL(url)) {
        throw new TestError('Invalid url.');
    }
    if (url.substring(url.length - 4) !== '.pdf') {
        throw new TestError('Url does not point to a PDF file.');
    }
    if (name === '') {
        test.name = `${year}.${semester}`;
    }
    if (year < 1970 || year > 2022) {
        throw new TestError('Invalid year.');
    }
    if (semester !== 1 && semester !== 2) {
        throw new TestError(`Invalid semester. ${semester}`);
    }
    const discipline = yield getRepository(DisciplineEntity)
        .findOne({ id: disciplineId });
    if (!discipline) {
        throw new TestError(`Discipline ID ${disciplineId} does not exist.`);
    }
    const category = yield getRepository(CategoryEntity)
        .findOne({ id: categoryId });
    if (!category) {
        throw new TestError(`Category ID ${categoryId} does not exist.`);
    }
    const teacher = yield getRepository(TeacherEntity)
        .findOne({ id: teacherId });
    if (!teacher) {
        throw new TestError(`Teacher ID ${teacherId} does not exist.`);
    }
    const createdTest = yield getRepository(TestEntity)
        .insert(test);
    if (createdTest.identifiers.length === 0) {
        throw new InternalError('Unexpected internal error.');
    }
    return true;
});
const findTests = () => __awaiter(void 0, void 0, void 0, function* () {
    const tests = yield getRepository(TestEntity)
        .find();
    return tests.map((test) => test.getTest());
});
const findTestsByDisciplineId = (disciplineId) => __awaiter(void 0, void 0, void 0, function* () {
    const tests = yield getRepository(TestEntity)
        .find({ disciplineId });
    return tests.map((test) => test.getTest());
});
const findTestsByTeacherId = (teacherId) => __awaiter(void 0, void 0, void 0, function* () {
    const tests = yield getRepository(TestEntity)
        .find({ teacherId });
    return tests.map((test) => test.getTest());
});
export { createTest, findTests, findTestsByDisciplineId, findTestsByTeacherId, };
