import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Todo } from "./shared/todo.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList() {
    return this.http.get(environment.gateway + "/todo");
  }

  addTodo(todo: Todo) {
    return this.http.post(environment.gateway + "/todo", todo);
  }

  completeTodo(todo: Todo) {
    return this.http.put(environment.gateway + "/todo", todo);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(environment.gateway + "/todo/" + todo.id);
  }
}
