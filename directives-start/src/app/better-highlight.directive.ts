import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgrounColor = 'transparent';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgrounColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

    this.backgrounColor = 'transparent';
  }

}
