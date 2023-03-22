import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/components/models/todo.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  // Getter para saber si el todo es nuevo o no. Si el id es igual a '', es nuevo.
  get isNew(): boolean {
    return this.todo.id === '';
  }
}
