import { Injectable, signal, effect } from '@angular/core';
import { Tasks } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSignal = signal<Tasks[]>(this.loadTasksFromStorage());

  public readonly tasks = this.taskSignal.asReadonly();

  constructor() {
    effect(() => {
      const tasksString = JSON.stringify(this.taskSignal());
      localStorage.setItem('my_todo_tasks', tasksString);
    });
  }

  private loadTasksFromStorage(): Tasks[] {
    const saved = localStorage.getItem('my_todo_tasks');
    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  }


  // Method to add a new task
  addTask(name: string) {
    const newTask: Tasks = {
        id: Date.now(),
        taskName: name,
        completed: false
    }
    this.taskSignal.update(currTask => [...currTask, newTask]);
  }

  deleteTask(id:number){
    this.taskSignal.update(currTask => currTask.filter(task => task.id !== id));
  }

}