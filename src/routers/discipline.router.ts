import { Router } from 'express';
import * as disciplineController from '../controllers/discipline.controller';

const router = Router();

router.get('', disciplineController.findDisciplines);

export default router;
