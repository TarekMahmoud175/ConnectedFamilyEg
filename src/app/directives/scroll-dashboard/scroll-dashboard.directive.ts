import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollDashboard]',
  host: {
    '(scroll)': 'onContentScroll($event)'
  }

})
export class ScrollDashboardDirective {
  @Input("header") header: HTMLElement
  headerHeight
  scrollContent

  constructor(
    public element: ElementRef,
    public renderer: Renderer2
  ) { }
  ngOnInit() {
    this.renderer.setStyle(this.header, 'webkitTransition', '900ms')
  }

  @HostListener('window:scroll', ['$event']) onContentScroll(e) {
    // this.scrollContent = document.scrollTop
    this.renderer.addClass(this.header, 'fixed_header')
  }
}
