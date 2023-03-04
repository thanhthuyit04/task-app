import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit{

  @Input() task: Task
  @Output() todoClick: EventEmitter<void> = new EventEmitter()
  @Output() editClick: EventEmitter<void> = new EventEmitter()
  @Output() deleteClick: EventEmitter<void> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    
  }

  onTaskClicked() {
    this.todoClick.emit()
  }

  onEditClicked() {
    this.editClick.emit()
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }
}
