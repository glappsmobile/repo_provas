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
const findDisciplines = () => __awaiter(void 0, void 0, void 0, function* () {
    const disciplines = yield getManager().query(`SELECT
      disciplines.*,
      (
        SELECT
          json_agg(tests.id) AS tests
        FROM tests
        WHERE tests.discipline_id = disciplines.id
      ) AS tests
    FROM disciplines;`);
    return disciplines.map((discipline) => ({
        id: discipline.id,
        name: discipline.name,
        testsCount: discipline.tests ? discipline.tests.length : 0,
    }));
});
export { findDisciplines, };
