import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostListener("mouseenter", ['$event.target']) onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement,'color','blue')
    this.renderer.setStyle(this.element.nativeElement,'margin-top','30px')
    this.renderer.setStyle(this.element.nativeElement,'font-weight','bold')
    this.renderer.setStyle(this.element.nativeElement,'font-size','19px')
    this.renderer.setStyle(this.element.nativeElement,'background-color','azure')
  }

  @HostListener("mouseleave", ['$event.target']) onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement,'color',null)
    this.renderer.setStyle(this.element.nativeElement,'margin-top',null)
    this.renderer.setStyle(this.element.nativeElement,'font-weight',null)
    this.renderer.setStyle(this.element.nativeElement,'font-size',null)
    this.renderer.setStyle(this.element.nativeElement,'background-color',null)
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

}
