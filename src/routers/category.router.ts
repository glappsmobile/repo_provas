import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';

const router = Router();

router.get('', categoryController.findCategories);

export default router;
