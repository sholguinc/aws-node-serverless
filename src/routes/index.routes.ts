import { Router } from 'express';

import * as IndexController from '../controllers/index.controller';

const router = Router();

router.route('/health').get(IndexController.health);

export default router;
