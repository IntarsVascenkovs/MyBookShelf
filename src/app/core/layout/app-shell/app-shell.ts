import { Component } from '@angular/core';
import {TopBar} from '../top-bar/top-bar';
import {SideNav} from '../side-nav/side-nav';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-app-shell',
  imports: [
    TopBar,
    SideNav,
    RouterOutlet
  ],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {

}
