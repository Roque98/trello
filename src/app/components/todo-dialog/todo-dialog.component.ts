import { Component, OnInit } from '@angular/core';
import { DialogRef } from "@angular/cdk/dialog";
import { faCheck, faBars, faUser,faTag, faCheckSquare, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  // Icon
  faCheckToSlot = faCheck;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  constructor(
    private dialog: DialogRef
  ) { }

  ngOnInit(): void {
  }

  // Close the dialog
  close() {
    this.dialog.close();
  }
}
