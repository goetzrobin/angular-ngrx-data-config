import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav class="main-nav">
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/lazy-posts">Lazy Posts</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>`,
  styles: [
    `:host {
    display: block;
  }
  `,
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
