import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogTaskComponent } from '../edit-dialog-task/edit-dialog-task.component';
import { DataService } from '../shared/data.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tasks: Task[]
  showValidationErrors: boolean

  constructor(private dataService: DataService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.tasks = this.dataService.getAllTask()
  }

  onFormSubmit(form: NgForm) {
      console.log("Form Submit")
      console.log(form)

      if(form.invalid) return this.showValidationErrors = true
      this.dataService.addTask(new Task(form.value.text));

      this.showValidationErrors = false
      form.reset()
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }

  editTask(task:Task) {
    const index = this.tasks.indexOf(task)
    //this.dataService.updateTask()
    let dialogRef = this.dialog.open(EditDialogTaskComponent, {
      width: '800px',
      data: task
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.dataService.updateTask(index, result)
      }
    })

  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task)
    this.dataService.deleteTask(index)
  }
}
