import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './top-bar.scss',
})
export class TopBar {

}
