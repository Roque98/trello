import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { faCheck, faBars, faUser,faTag, faCheckSquare, faClock } from "@fortawesome/free-solid-svg-icons";
import { ToDo } from '../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  respuesta: boolean;
}

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

  todo!: ToDo;

  constructor(
    private dialog: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ) { 
    this.todo = data.todo;
  }

  ngOnInit(): void {
  }

  // Close the dialog
  close() {
    this.dialog.close({
      respuesta: false
    });
  }

  closeWithRta(respuesta: boolean) {
    this.dialog.close({
      respuesta
    });
  }
}
