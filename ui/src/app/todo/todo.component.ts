import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Todo } from "../shared/todo.model";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  activeTodos: Todo[];
  completedTodos: Todo[];
  todoMessage: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.getTodoList().subscribe((data: Todo[]) => {
      this.activeTodos = data.filter((a) => !a.complete);
      this.completedTodos = data.filter((a) => a.complete);
    });
  }

  addTodo() {
    var newTodo: Todo = {
      message: this.todoMessage,
      id: "",
      complete: false,
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getAll();
      this.todoMessage = "";
    });
  }

  completeTodo(todo: Todo) {
    this.todoService.completeTodo(todo).subscribe(() => {
      this.getAll();
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.getAll();
    });
  }
}
