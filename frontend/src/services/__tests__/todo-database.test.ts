import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TodoDatabase } from '../todo-database';
import { Todo } from '../../types/todo';

/**
 * TodoDatabase 클래스 테스트 스위트
 *
 * 이 테스트 스위트는 TodoDatabase 클래스의 CRUD(Create, Read, Update, Delete) 작업을 검증합니다.
 * IndexedDB를 사용하는 모든 작업은 비동기적으로 처리되며, 각 테스트 케이스는 독립적으로 실행됩니다.
 */
describe('TodoDatabase', () => {
  let db: TodoDatabase;

  /**
   * 각 테스트 케이스 실행 전에 새로운 TodoDatabase 인스턴스를 생성합니다.
   */
  beforeEach(() => {
    db = new TodoDatabase();
  });

  /**
   * 각 테스트 케이스 실행 후에 데이터베이스를 삭제하여 다음 테스트에 영향을 주지 않도록 합니다.
   */
  afterEach(async () => {
    await db.delete();
  });

  /**
   * Todo 아이템 추가 및 조회 테스트
   *
   * 검증 항목:
   * 1. 할 일을 추가할 수 있는지 확인
   * 2. 추가한 할 일을 조회할 수 있는지 확인
   */
  it('할 일을 추가하고 조회할 수 있어야 한다', async () => {
    const todo: Todo = {
      id: '1',
      text: '테스트 할 일',
      completed: false,
      createdAt: new Date(),
    };

    await db.addTodo(todo);
    const todos = await db.getAllTodos();

    expect(todos).toHaveLength(1);
    expect(todos[0]).toEqual(todo);
  });

  /**
   * Todo 아이템 완료 상태 토글 테스트
   *
   * 검증 항목:
   * 1. 할 일의 완료 상태를 토글할 수 있는지 확인
   */
  it('할 일의 완료 상태를 토글할 수 있어야 한다', async () => {
    const todo: Todo = {
      id: '1',
      text: '테스트 할 일',
      completed: false,
      createdAt: new Date(),
    };

    await db.addTodo(todo);
    await db.toggleTodo('1');
    const todos = await db.getAllTodos();

    expect(todos[0].completed).toBe(true);
  });

  /**
   * Todo 아이템 삭제 테스트
   *
   * 검증 항목:
   * 1. 할 일을 삭제할 수 있는지 확인
   */
  it('할 일을 삭제할 수 있어야 한다', async () => {
    const todo: Todo = {
      id: '1',
      text: '테스트 할 일',
      completed: false,
      createdAt: new Date(),
    };

    await db.addTodo(todo);
    await db.deleteTodo('1');
    const todos = await db.getAllTodos();

    expect(todos).toHaveLength(0);
  });
});
