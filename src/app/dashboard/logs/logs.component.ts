import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(
    public spinner:NgxSpinnerService
  ) { }

  ngOnInit(): void {
    // this.spinner.show()
  }

}
