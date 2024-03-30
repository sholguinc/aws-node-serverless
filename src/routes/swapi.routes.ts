import { Router } from 'express';

import * as SwapiController from '../controllers/swapi.controller';

const router = Router();

// people
router.route('/people').get(SwapiController.getPeople);
router.route('/people/schema').get(SwapiController.getPeopleSchema);
router.route('/people/:personId').get(SwapiController.getPerson);

export default router;
