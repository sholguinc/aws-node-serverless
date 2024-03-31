import { Router } from 'express';

import * as BookController from '../controllers/book.controller';
import { createBookValidator } from '../middleware';

const router = Router();

router.route('/').get(BookController.getBooks);
router.route('/:bookId').get(BookController.getBook);
router.route('/').post(createBookValidator, BookController.postBook);

export default router;
