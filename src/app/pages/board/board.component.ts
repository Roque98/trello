import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from 'src/app/components/models/todo.model';



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

  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes'
    },
    {
      id: '2',
      title: 'Buy a unicorn'
    }
  ];

  doing: ToDo[] = [
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
  ];

  done: ToDo[] = [
    {
      id: '6',
      title: 'Go to the gym'
    },
    {
      id: '7',
      title: 'Go to the movies'
    },
  ];
    


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

}

