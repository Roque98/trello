import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styles: [
    `
    
    `
  ]
})
export class ColumnComponent implements OnInit {

  @Input() columnsIds: string[] = [];
  @Input() column: Column = {
    id: '',
    title: '',
    todos: []
  };


  showMenu = false;
  faEllipsisH = faEllipsisH;


  constructor() { }

  ngOnInit(): void {
  }

  // Add new todo
  addTodoToColumn(column: Column) {
    column.todos.push({
      id: '',
      title: ''
    });
  }

  // Move todo from one column to another
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
