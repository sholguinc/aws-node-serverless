import { type Repository } from 'typeorm';

import { dataSource } from '../config';
import { Book } from '../entities';
import { type CreateBookDto } from '../dto';

export class BookService {
  bookRepository: Repository<Book>;

  constructor() {
    this.bookRepository = dataSource.getRepository(Book);
  }

  async getBooks() {
    return await this.bookRepository.find();
  }

  async getBook(id: number) {
    return await this.bookRepository.findOneBy({ id });
  }

  async postBook(createBookDto: CreateBookDto) {
    const newBook = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(newBook);
  }
}
