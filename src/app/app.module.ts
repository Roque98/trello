import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardComponent } from './pages/board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ColumnComponent } from './pages/board/components/column/column.component';
import { TodoComponent } from './pages/board/components/todo/todo.component';
import { DialogModule } from '@angular/cdk/dialog';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    ColumnComponent,
    TodoComponent,
    TodoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
