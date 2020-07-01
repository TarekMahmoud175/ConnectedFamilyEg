import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  constructor() { }
  events=["event1","event2","event3","event4"]
  ngOnInit(): void {
  }

}
