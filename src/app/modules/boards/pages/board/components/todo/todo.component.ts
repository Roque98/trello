import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { Dialog } from "@angular/cdk/dialog";
import { TodoDialogComponent } from '../../../components/todo-dialog/todo-dialog.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class TodoComponent implements OnInit {

  @Input() todo: ToDo = {
    id: '',
    title: '',
  };

  constructor(
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
  }

  // Open dialog to edit the todo
  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '500px',
      autoFocus: false,
      data: {
        todo: todo
      }
    });

    dialogRef.closed.subscribe((result) => {
      // Si el resultado es undefined, es porque se ha cancelado el dialog
      if (result) {
        console.log(result);
        
      }
    }
    );
  }

  // Getter para saber si el todo es nuevo o no. Si el id es igual a '', es nuevo.
  get isNew(): boolean {
    return this.todo.id === '';
  }
}
