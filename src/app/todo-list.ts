import { TODO } from "./todo";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TODOList {

    todoList: TODO[] = [
        {
        task: "Complete project proposal",
        completed: false
        },
        {
        task: "Buy groceries",
        completed: true
        },
        {
        task: "Call John",
        completed: false
        },
        {
        task: "Pay bills",
        completed: true
        },
        {
        task: "Attend meeting",
        completed: false
        }];

    getAllToDos(): Observable<TODO[]>{
        const todos = of(this.todoList);
        return todos;
    }

    addToDo(newTask: string): void{
      const newTODO: TODO = {
        task: newTask,
        completed: false
      };

      this.todoList.push(newTODO);
    }
}
