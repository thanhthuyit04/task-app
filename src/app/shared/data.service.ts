import { Injectable } from '@angular/core';
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Task[] = [
    new Task('When combining several controls in a form, use the field class as a container, to keep the spacing consistent.'),
    new Task('When combining several controls in a form, use the field class as a container, to keep the spacing consistent.'),
  ];

  constructor() { }

  getAllTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(index: number, updateTask: Task) {
    this.tasks[index] = updateTask;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
