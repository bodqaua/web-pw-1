import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {
  @Input('appAlert') title?: string;

  @HostListener("click", ['$event.target']) onPostClick() {
    alert(this.title);
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}
}
