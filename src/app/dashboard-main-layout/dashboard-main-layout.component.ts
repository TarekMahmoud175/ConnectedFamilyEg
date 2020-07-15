import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-layout',
  templateUrl: './dashboard-main-layout.component.html',
  styleUrls: ['./dashboard-main-layout.component.css']
})
export class DashboardMainLayoutComponent implements OnInit {
  @Input() title:string
  @Input() addForm:boolean = false
  @Input() routerUrl:string 
  dropmenu:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  drop(e){
    this.dropmenu = !this.dropmenu
  }
}
