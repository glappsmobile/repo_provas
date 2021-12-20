import { Router } from 'express';
import * as testController from '../controllers/test.controller';

const router = Router();

router.post('', testController.createTest);
router.get('', testController.findTests);
router.get('/discipline/:disciplineId', testController.findTestsByDisciplineId);
router.get('/teacher/:teacherId', testController.findTestsByTeacherId);

export default router;
