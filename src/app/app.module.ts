import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { TasksComponent } from './components/table/table.component';
import { TaskService, RowHeaderService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService, RowHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
