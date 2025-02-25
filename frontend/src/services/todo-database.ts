import Dexie, { Table } from 'dexie';
import { TodoItem, CreateTodoDTO } from '../types/todo';

/**
 * Todo 데이터베이스 클래스
 * Dexie를 확장하여 IndexedDB를 관리합니다.
 */
export class TodoDatabase extends Dexie {
  // Todo 테이블 정의
  todos!: Table<TodoItem>;

  constructor() {
    super('TodoDatabase');

    // 데이터베이스 스키마 정의
    this.version(1).stores({
      todos: '++id, title, status, createdAt, updatedAt',
    });
  }

  /**
   * 새로운 Todo 아이템을 생성합니다.
   */
  async addTodo(dto: CreateTodoDTO): Promise<TodoItem> {
    const now = new Date();
    const todo: TodoItem = {
      ...dto,
      status: dto.status || 'todo',
      createdAt: now,
      updatedAt: now,
    };

    const id = await this.todos.add(todo);
    return { ...todo, id };
  }

  /**
   * ID로 Todo 아이템을 조회합니다.
   */
  async getTodo(id: number): Promise<TodoItem | undefined> {
    return this.todos.get(id);
  }

  /**
   * Todo 아이템을 수정합니다.
   */
  async updateTodo(id: number, updates: Partial<TodoItem>): Promise<void> {
    await this.todos.update(id, {
      ...updates,
      updatedAt: new Date(),
    });
  }

  /**
   * Todo 아이템을 삭제합니다.
   */
  async deleteTodo(id: number): Promise<void> {
    await this.todos.delete(id);
  }

  /**
   * 모든 Todo 아이템을 조회합니다.
   */
  async getAllTodos(): Promise<TodoItem[]> {
    return this.todos.toArray();
  }

  /**
   * 상태별로 Todo 아이템을 필터링하여 조회합니다.
   */
  async getTodosByStatus(status: TodoItem['status']): Promise<TodoItem[]> {
    return this.todos.where('status').equals(status).toArray();
  }
}
