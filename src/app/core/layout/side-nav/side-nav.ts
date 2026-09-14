import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-nav.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './side-nav.scss',
})
export class SideNav {

}
