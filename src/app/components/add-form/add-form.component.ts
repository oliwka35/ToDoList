import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../services/data.service'
import {Task} from '../../models/Task';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
  task: Task = {
    name: '',
    priority: '',
    done: false 
  }

  @ViewChild('addForm') form: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Task, valid: boolean}){
    if(!valid){
      console.log('Form is not valid');
    } else {
     
      this.taskService.addTask(value);
      this.form.reset();
    }

}
}
