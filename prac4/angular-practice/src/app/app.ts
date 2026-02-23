import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
 