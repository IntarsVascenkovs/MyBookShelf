import { Book } from '../../../core/models/book.model';
import { LANGUAGE } from '../../../core/constants/language.constants';
import { BOOK_CONDITION, BOOK_ISSUE, BOOK_STATUS } from '../../../core/constants/book.constants';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Book 1',
    description: 'Book 1 description',
    language: LANGUAGE.ENGLISH,
    author: "John Smith",
    condition: BOOK_CONDITION.NEW,
    status: BOOK_STATUS.WISHLIST,
    issues: []
  },
  {
    id: '2',
    title: 'Book 2',
    description: 'Book 2 description',
    language: LANGUAGE.CZECH,
    author: "",
    condition: BOOK_CONDITION.NEW,
    status: BOOK_STATUS.OWNED,
  },
  {
    id: '3',
    title: 'Book 3',
    description: 'Book 3 description',
    language: LANGUAGE.RUSSIAN,
    author: "Strugatski",
    condition: BOOK_CONDITION.POOR,
    status: BOOK_STATUS.OWNED,
    issues: [BOOK_ISSUE.MISSING_COVER, BOOK_ISSUE.MISSING_PAGES]
  },
  {
    id: '4',
    title: 'Dune',
    author: 'Frank Herbert',
    language: LANGUAGE.ENGLISH,
    condition: BOOK_CONDITION.VERY_GOOD,
    status: BOOK_STATUS.OWNED,
    publicationYear: 1965,
  },
  {
    id: '5',
    title: 'Foundation',
    author: 'Isaac Asimov',
    language: LANGUAGE.ENGLISH,
    condition: BOOK_CONDITION.GOOD,
    status: BOOK_STATUS.WISHLIST,
    publicationYear: 1951,
  },
]
