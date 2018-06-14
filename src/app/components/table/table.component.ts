import { Component, OnInit } from '@angular/core';
import { TaskService, RowHeaderService } from '../../services/data.service'
import {Task} from '../../models/Task';
import {RowHeader} from '../../models/RowHeader';


@Component({
  selector: 'app-tasks',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TasksComponent implements OnInit {
  task: Task = {
    name: '',
    priority: '',
    done: false
  };
  tasks: Task[];
  rowHeader: RowHeader = {
    rowName: '',
    sorted: false
  };
  rowHeaders: RowHeader[];
  hoveredRow: Number;
  showBin: boolean = false;
  hoveredHeader: Number;
  showArrow: boolean = false;

  constructor(public taskService: TaskService, public rowHeaderService: RowHeaderService) { }
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.rowHeaders = this.rowHeaderService.getRowHeader();
  }


  sort(e){
    let property = e.srcElement.id;
    if(this.rowHeader.sorted == false){
    this.tasks.sort((a, b) => {
     if(a[property] > b[property]) return -1;
      if(a[property] < b[property]) return 1;
      else return 0;
    });
  }
  
  else{
      this.tasks.sort((a, b) => {
       if(a[property] < b[property]) return -1;
        if(a[property] > b[property]) return 1;
        else return 0;
      });    
    }
    this.rowHeader.sorted = !this.rowHeader.sorted;
  }

  setHoveredRow = function(index){
     this.hoveredRow = index;
     this.showBin = true;
  };

  setHoveredHeader = function(index){
    this.hoveredHeader = index;
    this.showArrow = true;

  }

  delete(i){
  this.tasks.splice(i, 1);
  //Delete from local storage
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
   
}
  
 
