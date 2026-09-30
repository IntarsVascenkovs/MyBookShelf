import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Book} from '../../../../core/models/book.model';
import {BookCard} from '../../components/book-card/book-card';
import {BOOKS} from '../../data/books.mock';

@Component({
  selector: 'app-books-list',
  imports: [BookCard],
  templateUrl: './books-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './books-list.scss',
})
export class BooksList {
  protected readonly books: Book[] = BOOKS;
}
