import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ToDo } from 'src/app/components/models/todo.model';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
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
export class BoardComponent implements OnInit {

  columns: Column[] = [
    {
      id: '1',
      title: 'To do',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ]
    },
    {
      id: '2',
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        },
        {
          id: '4',
          title: 'Play video games'
        },
        {
          id: '5',
          title: 'Play soccer'
        }
      ]
    },
    {
      id: '3',
      title: 'Done',
      todos: [
        {
          id: '6',
          title: 'Go to the gym'
        },
        {
          id: '7',
          title: 'Go to the movies'
        },
      ]
    }
  ];

  isOpen = false;

  constructor() { 

  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      console.log('same container');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('different container');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }

  // getter of array of ids columns
  get columnsIds() {
    return this.columns.map(column => column.id);
  }

  // getter of array of ids from other html elements
  getId(elementName: string) {
    return this.columns.map(column => column.id + elementName);
  }

  // Add new column
  addColumn() {
    this.columns.push({
      id: this.columns.length + 1 + '',
      title: 'New column',
      todos: []
    });
  }
}

