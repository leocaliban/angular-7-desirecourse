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
        transition('normal <=> highlighted',
          animate(300)
        )
      ]
    ),
    trigger('wildState',
      [
        state('normal',
          style({
            'background-color': '#cccccc',
            transform: 'translateX(0) scale(1)'
          })
        ),
        state('highlighted',
          style({
            'background-color': '#505050',
            transform: 'translateX(100px) scale(1)'
          })
        ),
        state('shrunken',
          style({
            'background-color': '#efdd00',
            transform: 'translateX(0) scale(0.5)'
          })
        ),
        transition('normal => highlighted',
          animate(300)
        ),
        transition('highlighted => normal',
          animate(800)
        ),
        transition('shrunken <=> *',
          animate(500)
        )
      ]
    )
  ]
})
export class AppComponent {

  state = 'normal';
  wildState = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }
}
