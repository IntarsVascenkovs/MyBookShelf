import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BOOKS } from '../../../books/data/books.mock';
import {BOOK_CONDITION, BOOK_STATUS, BOOK_ISSUE} from '../../../../core/constants/book.constants';
import {LANGUAGE} from '../../../../core/constants/language.constants';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly books = signal(BOOKS);

  protected readonly totalBooks = computed(
    () => this.books().length
  );

  protected readonly wishlistBooks = computed(
    () =>
      this.books().filter(
        book => book.status === BOOK_STATUS.WISHLIST
      ).length
  );

  duplicateBooks = signal(55555);
  incompleteSeries = signal(66666);

  protected addTestBook(): void {
    this.books.update(books => [
      ...books,
          {
            id: '17',
            title: 'Test Book',
            author: 'Test Author',
            language: LANGUAGE.ENGLISH,
            condition: BOOK_CONDITION.NEW,
            status: BOOK_STATUS.OWNED,
            publicationYear: 2020,
            createdAt: new Date().toISOString(),
          }
    ])
}
}
