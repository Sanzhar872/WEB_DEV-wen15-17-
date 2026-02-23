import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService = inject(TaskService);


  addNewTask(taskName: string, Input: HTMLInputElement) {
    if (taskName.trim()) {
      this.taskService.addTask(taskName);
      Input.value = '';
    }
  }
}
