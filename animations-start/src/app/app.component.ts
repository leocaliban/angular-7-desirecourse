import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
        transition('normal => highlighted',
          animate(300)
        ),
        transition('highlighted => normal',
          animate(500)
        )
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
