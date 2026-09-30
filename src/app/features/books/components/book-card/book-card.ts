import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {Book} from '../../../../core/models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly book = input.required<Book>()
}
