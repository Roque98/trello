import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/components/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]
})
export class BoardComponent implements OnInit {


  todos: ToDo[] = [
    {
      id: '1',
      title: 'Learn Angular'
    },
    {
      id: '2',
      title: 'Learn React'
    },
    {
      id: '3',
      title: 'Learn Vue'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    // Hacer un console log de todas las variables que se pueden usar del event
    console.log(event);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex)
  }



}
