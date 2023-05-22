import { Component, OnInit } from '@angular/core';
import { TODO } from './todo';
import { TODOList } from './todo-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TODO_Lab';
  
  constructor(private todoList: TODOList ){}

  todos: TODO[] = [];

  ngOnInit(): void{
    this.getToDos();
    console.log(this.todos);
  }

  getToDos(): void{
    this.todoList.getAllToDos().subscribe(result => {
      this.todos = result
    });
  }

  doneToDo(done: TODO): void{
    done.completed=true;
  }

  onSubmit(newTask: string): void{
    event?.preventDefault();
    this.todoList.addToDo(newTask);
    
  }
}
