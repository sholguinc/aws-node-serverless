import { type Request, type Response } from 'express';

import { BookService } from '../services';
import { type CreateBookDto } from '../dto';

const bookService = new BookService();

export async function getBooks(req: Request, res: Response): Promise<Response> {
  try {
    const books = await bookService.getBooks();
    return res.json(books);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting books' });
  }
}

export async function getBook(req: Request, res: Response): Promise<Response> {
  try {
    const id = Number(req.params.bookId);
    const book = await bookService.getBook(id);

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with id '${id}' not found` });
    }

    return res.json(book);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting book' });
  }
}

export async function postBook(req: Request, res: Response): Promise<Response> {
  try {
    const createBookDto: CreateBookDto = req.body;
    const response = await bookService.postBook(createBookDto);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: 'Error posting book' });
  }
}
