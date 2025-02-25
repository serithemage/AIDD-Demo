import Dexie, { Table } from 'dexie';
import { Todo } from '../types/todo';

/**
 * TodoDatabase 클래스는 IndexedDB를 사용하여 할 일 목록을 관리합니다.
 */
export class TodoDatabase extends Dexie {
  private todos!: Table<Todo>;

  constructor() {
    super('TodoDatabase');
    this.version(1).stores({
      todos: 'id',
    });
  }

  /**
   * 모든 할 일 목록을 조회합니다.
   */
  async getAllTodos(): Promise<Todo[]> {
    return this.todos.toArray();
  }

  /**
   * 새로운 할 일을 추가합니다.
   */
  async addTodo(todo: Todo): Promise<void> {
    await this.todos.add(todo);
  }

  /**
   * 할 일의 완료 상태를 토글합니다.
   */
  async toggleTodo(id: string): Promise<boolean> {
    const todo = await this.todos.get(id);
    if (todo) {
      await this.todos.update(id, { completed: !todo.completed });
      return true;
    }
    return false;
  }

  /**
   * 할 일을 삭제합니다.
   */
  async deleteTodo(id: string): Promise<void> {
    await this.todos.delete(id);
  }
}

/**
 * TodoDatabase의 전역 인스턴스
 */
export const db = new TodoDatabase();
