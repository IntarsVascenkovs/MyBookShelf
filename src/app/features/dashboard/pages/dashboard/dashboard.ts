import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BOOK_STATUS } from '../../../../core/constants/book.constants';
import { BOOKS } from '../../../books/data/books.mock';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly books = signal(BOOKS);

  protected readonly totalBooks = computed(
    () => this.books().length,
  );

  protected readonly wishlistBooks = computed(
    () => this.books().filter(
      book => book.status === BOOK_STATUS.WISHLIST,
    ).length,
  );

  protected readonly duplicateBooks = computed(() => {
    const booksCount = new Map<string, number>();

    for (const book of this.books()) {
      const key = `${book.title.toLowerCase()}|${book.author.toLowerCase()}`;

      booksCount.set(
        key,
        (booksCount.get(key) ?? 0) + 1,
      );
    }

    return [...booksCount.values()]
      .filter(count => count > 1)
      .reduce((total, count) => total + count -1, 0);
  });

  protected readonly incompleteSeries = computed(() => 0)
}
