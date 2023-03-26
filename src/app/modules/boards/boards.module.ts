import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { ColumnComponent } from './pages/board/components/column/column.component';
import { TodoComponent } from './pages/board/components/todo/todo.component';
import { TodoDialogComponent } from './pages/components/todo-dialog/todo-dialog.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    ColumnComponent,
    TodoComponent,
    TodoDialogComponent,
    
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    SharedModule,
    DragDropModule,
    OverlayModule,
    DialogModule
  ]
})
export class BoardsModule { }
