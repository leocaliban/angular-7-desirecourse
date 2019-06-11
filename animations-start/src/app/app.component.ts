import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

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
          [
            style({
              'background-color': '#2cc2cc'
            }),
            animate(1000,
              style({
                'border-radius': '50px'
              })
            ),
            animate(500)
          ]
        )
      ]
    ),
    trigger('list1',
      [
        state('in',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ),
        transition('void => *',
          [
            style({
              opacity: 0,
              transform: 'translateX(-100px)'
            }),
            animate(300)
          ]
        ),
        transition('* => void',
          [
            animate(300,
              style({
                opacity: 0,
                transform: 'translateX(100px)'
              }),
            )
          ]
        )
      ]
    ),
    trigger('list2',
      [
        state('in',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ),
        transition('void => *',
          [
            animate(1000,
              keyframes(
                [
                  style({
                    offset: 0,
                    opacity: 0,
                    transform: 'translateX(-100px)'
                  }),
                  style({
                    offset: 0.3,
                    opacity: 0.5,
                    transform: 'translateX(-50px)'
                  }),
                  style({
                    offset: 0.8,
                    opacity: 1,
                    transform: 'translateX(-20px)'
                  }),
                  style({
                    offset: 1,
                    opacity: 1,
                    transform: 'translateX(0)'
                  }),
                ]
              ))
          ]
        ),
        transition('* => void',
          [
            group([
              animate(300,
                style({
                  color: '#bbff33'
                }),
              ),
              animate(600,
                style({
                  'background-color': '#888888'
                }),
              ),
              animate(1900,
                style({
                  opacity: 0,
                  transform: 'translateX(100px)'
                }),
              ),
            ])
          ]
        )
      ]
    ),
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

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }

}
