import { Router } from 'express';
import * as testController from '../controllers/test.controller';

const router = Router();

router.post('', testController.createTest);
router.get('', testController.findTests);

export default router;
