import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-edit-dialog-task',
  templateUrl: './edit-dialog-task.component.html',
  styleUrls: ['./edit-dialog-task.component.scss']
})
export class EditDialogTaskComponent implements OnInit{
  
  constructor(
    public dialogRef: MatDialogRef<EditDialogTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task) {}

  ngOnInit(): void {
    
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) return
    
    const updatedTask = {
      ...this.task,
      ...form.value
    }

    this.dialogRef.close(updatedTask);
  
  }

  close() {
    this.dialogRef.close();
  }

}
