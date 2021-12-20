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
import * as teacherService from '../services/teacher.service';
import * as teacherValidation from '../validations/teacher.validation';
const findTeachers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield teacherService.findTeachers();
        return res.send(teachers);
    }
    catch (error) {
        next(error);
    }
});
const findTeachersByDisciplineId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (teacherValidation.findTeachersByDisciplineId.validate(req.params).error) {
        return res.sendStatus(statusCode.BAD_REQUEST);
    }
    const disciplineId = Number(req.params.disciplineId);
    try {
        const teachers = yield teacherService.findTeachersByDisciplineId(disciplineId);
        return res.send(teachers);
    }
    catch (error) {
        next(error);
    }
});
export { findTeachers, findTeachersByDisciplineId, };
