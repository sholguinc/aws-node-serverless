import { type NextFunction } from 'express';
import { validateOrReject, type ValidationError } from 'class-validator';

import { CreateBookDto } from '../dto';

export const createBookValidator = async (
  // @ts-ignore
  req,
  // @ts-ignore
  res,
  next: NextFunction,
) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ message: 'Missing request body!' });
    }

    const book = new CreateBookDto();
    book.name = req.body.name;
    book.author = req.body.author;
    book.description = req.body.description;

    await validateOrReject(book);

    next();
    // @ts-ignore
  } catch (errors: ValidationError[]) {
    const errorsMessage: object[] = errors.map(
      (error: ValidationError) => error.constraints,
    );
    res.status(400).send({ errors: errorsMessage });
  }
};
