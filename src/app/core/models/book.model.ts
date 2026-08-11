import { Language } from '../constants/language.constants';
import { BookCondition, BookIssue, BookStatus } from '../constants/book.constants';

export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  imageUrl?: string;
  language: Language;
  publicationYear?: number;
  isbn?: string;
  condition: BookCondition;
  status: BookStatus;
  issues?: BookIssue[];
}
