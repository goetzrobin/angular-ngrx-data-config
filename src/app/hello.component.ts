import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>I am eagerly loaded</p>`,
  styles: [
    `:host {
    display: block;
  }`,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
