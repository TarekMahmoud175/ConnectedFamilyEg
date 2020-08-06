import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDashboardDirective } from './scroll-dashboard/scroll-dashboard.directive';



@NgModule({
  declarations: [ScrollDashboardDirective],
  imports: [
    CommonModule
  ],
  exports: [ScrollDashboardDirective]
})
export class DirectivesModule { }
