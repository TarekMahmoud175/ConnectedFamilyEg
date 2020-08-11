import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(UserDialogComponent);
  }
}
