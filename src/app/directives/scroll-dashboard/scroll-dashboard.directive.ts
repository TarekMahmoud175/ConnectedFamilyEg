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
    this.renderer.setStyle(this.header, 'webkitTransition', '900ms ease')
  }

  @HostListener('window:scroll', ['$event']) onContentScroll(e) {
    if(window.scrollY <= 6){
      this.renderer.removeClass(this.header, 'fixed_header')
    }else{
      this.renderer.addClass(this.header, 'fixed_header')
    }
  }
}
