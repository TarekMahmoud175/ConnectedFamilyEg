import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {
  }

  addNew(url){
    document.getElementsByClassName('modal-backdrop')[0].remove()
    document.getElementsByTagName('body')[0].classList.remove('modal-open')
    this.router.navigateByUrl(`${url}`);
  }
}
