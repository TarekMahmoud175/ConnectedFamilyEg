import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventCardComponent } from './event-card/event-card.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  events = [
    { id: 1 ,unique:100,year:2019,name:'Eureka1',start:"2018-04-10 22:00:00",end:"2018-04-10 22:00:00",description:"Bla bla",pref_type:"2r1",published:true},
    { id: 2 ,unique:101,year:2029,name:'Eureka2',start:"2029-04-12 22:00:00",end:"2029-04-12 22:00:00",description:"Bla Y3m",pref_type:"2r2",published:false},
    { id: 3 ,unique:102,year:2020,name:'Eureka3',start:"2020-04-13 22:00:00",end:"2020-04-13 22:00:00",description:"Bla b2a",pref_type:"2r4",published:true},
    { id: 4 ,unique:103,year:2018,name:'Eureka4',start:"2018-04-15 22:00:00",end:"2018-04-15 22:00:00",description:"Bla kfayaaa",pref_type:"2r1",published:false}
  ];
  displayedColumns: string[] = ['id','unique','year','start','end','description','pref_type','published'];
  constructor(
    public dialog: MatDialog
  ) { 
    this.dataSource = new MatTableDataSource(this.events);
  }
  ngOnInit(): void { 
    this.dataSource.sort = this.sort;
  }

  openEventCard(){
    this.dialog.open(EventCardComponent);
  }
}
