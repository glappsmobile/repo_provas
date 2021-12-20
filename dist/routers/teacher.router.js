import { Router } from 'express';
import * as teacherController from '../controllers/teacher.controller';
const router = Router();
router.get('', teacherController.findTeachers);
router.get('/discipline/:disciplineId', teacherController.findTeachersByDisciplineId);
export default router;
