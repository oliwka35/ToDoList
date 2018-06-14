import { Injectable } from '@angular/core';
import {Task } from '../models/Task';
import { RowHeader } from '../models/RowHeader'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = []
   }

   getTasks() {
     if(localStorage.getItem('tasks')=== null){
       this.tasks = [];
     } else{
       this.tasks = JSON.parse(localStorage.getItem('tasks'));
     }
     return this.tasks;
   }

   addTask(task: Task){
     this.tasks.unshift(task);
      //Add to local storage 
     localStorage.setItem('tasks', JSON.stringify(this.tasks));

   }
}

export class RowHeaderService {
  rowHeaders: RowHeader[];
  constructor() {
    this.rowHeaders= [
      {
        rowName: 'name',
        sorted: false
      },
      {
        rowName: 'priority',
        sorted: false

      },
      {
        rowName: 'done',
        sorted: false
      }
    ]
   }
   getRowHeader() {
    return this.rowHeaders;
  }
}
