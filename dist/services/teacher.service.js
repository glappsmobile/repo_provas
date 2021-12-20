var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getManager } from 'typeorm';
const findTeachers = () => __awaiter(void 0, void 0, void 0, function* () {
    const teachers = yield getManager().query(`SELECT
      teachers.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE tests.teacher_id = teachers.id
      ) AS tests
    FROM teachers;`);
    return teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        testsCount: teacher.tests ? teacher.tests.length : 0,
    }));
});
const findTeachersByDisciplineId = (disciplineId) => __awaiter(void 0, void 0, void 0, function* () {
    const teachers = yield getManager().query(`SELECT
      teachers.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE
          tests.teacher_id = teachers.id AND
          tests.discipline_id = $1
      ) AS tests
    FROM teachers
      JOIN teachers_disciplines
        ON teachers_disciplines.teacher_id = teachers.id
          JOIN disciplines
            ON teachers_disciplines.discipline_id = disciplines.id
    WHERE disciplines.id = $1;`, [disciplineId]);
    return teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        testsCount: teacher.tests ? teacher.tests.length : 0,
    }));
});
export { findTeachers, findTeachersByDisciplineId, };
