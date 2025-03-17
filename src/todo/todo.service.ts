import { Injectable } from '@nestjs/common';
import { todos, users } from "../data";
import { NotFoundError } from 'rxjs';
import { Todo } from './dto';

@Injectable()
export class TodoService {
  private todos = todos;

  create(userId, todo: Todo) {
    this.todos.push({
      id: String(this.todos.length + 1),
      title: todo.title,
      completed: false,
      ownerId: userId,
      createdAt: new Date(),
    });
    return this.todos.filter(({ ownerId }) => ownerId === userId);
  }

  findAll(userId: string) {
    return this.todos.filter(({ ownerId }) => ownerId === userId);
  }

  update(todo: Todo) {
    const id = this.findTodo(String(todo.id));
    this.todos[id] = todo;
    return this.todos.filter(({ ownerId }) => ownerId === todo.ownerId);
  }

  remove(id: number, token: string) {
    const remIdx = this.findTodo(String(id));
    this.todos.splice(remIdx, 1);
    const user = users.find((user) => user.token === token);
    return this.todos.filter((todo) => todo.ownerId === user.id);
  }

  private findTodo(id: string) {
    const bdId = this.todos.findIndex((_todo) => _todo.id === id);
    if (bdId === -1) {
      throw new NotFoundError('such todo Item not exist ' + bdId + ' ' + id);
    }
    return bdId;
  }
}
