import { Component } from '@angular/core';
import { Todo } from '../models/models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  new todoTask: string = '';



  todos: Todo[] = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Read a book', completed: false },
  ];
}
