import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState',
      [
        state('normal',
          style({
            'background-color': '#cccccc',
            transform: 'translateX(0)'
          })
        ),
        state('highlighted',
          style({
            'background-color': '#505050',
            transform: 'translateX(100px)'
          })
        ),
      ])
  ]
})
export class AppComponent {

  state = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = 'highlighted';
  }

  onShrink() {
    this.state = 'normal';
  }
}
