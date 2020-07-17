import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  toggle(){
    let nav = document.getElementById('sideNav')
    nav.classList.remove('show')
    let btn = document.getElementById('sideBar_toggle')
    btn.classList.remove('active');
  }

}
