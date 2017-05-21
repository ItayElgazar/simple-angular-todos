import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ITodo } from './todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todo: ITodo;
  todos: Array<ITodo> = [];
  todosCount: number;

  constructor() {
    this.todo = { isChecked: false, todoName: '' };
    this.todosCount = 0;
    
  }


  deleteTodo(todo) {    
    this.todos = this.todos.filter(t => todo.todoName !== t.todoName);
    this.todosCount = this.getTodosCount();
  }

  addTodo(todoForm) {
    if (todoForm.invalid || !this.todo.todoName) {
      return;
    }

    this.todos.push(this.todo);
    this.clearTodoInput();
    this.todosCount = this.getTodosCount();
  }

  checkTodo(todo: ITodo) {
    todo.isChecked = true;
    this.todosCount = this.getTodosCount();
  }

  unCheckTodo(todo: ITodo) {
    todo.isChecked = false;
    this.todosCount = this.getTodosCount();
  }

  getTodosCount() {
    return this.todos.filter(t => !t.isChecked).length;
  }

  clearTodoInput() {
    this.todo = { isChecked: false, todoName: null };
  }

  clearTodos() {
    this.todos = [];
    this.todosCount = 0;
  }



  ngOnInit() {

  }


}