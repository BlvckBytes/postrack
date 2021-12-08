import { Component } from '@angular/core';
import { links } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Expose navigation links exported from file for
  // the use as a parameter to a child-component
  get navLinks() {
    return links;
  }
}
