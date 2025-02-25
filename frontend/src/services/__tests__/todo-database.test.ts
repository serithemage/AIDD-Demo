import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TodoDatabase } from '../todo-database';
import { CreateTodoDTO } from '../../types/todo';

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
   * Todo 아이템 생성 테스트
   *
   * 검증 항목:
   * 1. ID가 자동으로 생성되는지 확인
   * 2. 입력한 데이터가 정확히 저장되는지 확인
   * 3. 생성일과 수정일이 올바르게 설정되는지 확인
   */
  it('Todo 아이템을 생성할 수 있어야 한다', async () => {
    const todoDTO: CreateTodoDTO = {
      title: '테스트 할 일',
      description: '이것은 테스트입니다',
      status: 'todo',
    };

    const todo = await db.addTodo(todoDTO);

    expect(todo.id).toBeDefined();
    expect(todo.title).toBe(todoDTO.title);
    expect(todo.description).toBe(todoDTO.description);
    expect(todo.status).toBe(todoDTO.status);
    expect(todo.createdAt).toBeInstanceOf(Date);
    expect(todo.updatedAt).toBeInstanceOf(Date);
  });

  /**
   * Todo 아이템 조회 테스트
   *
   * 검증 항목:
   * 1. 생성된 아이템을 ID로 정확히 조회할 수 있는지 확인
   * 2. 조회된 데이터가 생성 시의 데이터와 일치하는지 확인
   */
  it('Todo 아이템을 조회할 수 있어야 한다', async () => {
    const todoDTO: CreateTodoDTO = {
      title: '테스트 할 일',
      description: '이것은 테스트입니다',
      status: 'todo',
    };

    const created = await db.addTodo(todoDTO);
    const found = await db.getTodo(created.id!);

    expect(found).toBeDefined();
    expect(found!.id).toBe(created.id);
    expect(found!.title).toBe(created.title);
  });

  /**
   * Todo 아이템 수정 테스트
   *
   * 검증 항목:
   * 1. 아이템의 내용을 수정할 수 있는지 확인
   * 2. 수정 후 수정일(updatedAt)이 업데이트되는지 확인
   * 3. 다른 필드들은 그대로 유지되는지 확인
   */
  it('Todo 아이템을 수정할 수 있어야 한다', async () => {
    const todoDTO: CreateTodoDTO = {
      title: '테스트 할 일',
      description: '이것은 테스트입니다',
      status: 'todo',
    };

    const created = await db.addTodo(todoDTO);
    const updatedTitle = '수정된 할 일';

    await db.updateTodo(created.id!, { title: updatedTitle });
    const updated = await db.getTodo(created.id!);

    expect(updated!.title).toBe(updatedTitle);
    expect(updated!.updatedAt.getTime()).toBeGreaterThan(created.updatedAt.getTime());
  });

  /**
   * Todo 아이템 삭제 테스트
   *
   * 검증 항목:
   * 1. 아이템을 삭제할 수 있는지 확인
   * 2. 삭제 후 해당 ID로 아이템을 조회했을 때 undefined가 반환되는지 확인
   */
  it('Todo 아이템을 삭제할 수 있어야 한다', async () => {
    const todoDTO: CreateTodoDTO = {
      title: '테스트 할 일',
      description: '이것은 테스트입니다',
      status: 'todo',
    };

    const created = await db.addTodo(todoDTO);
    await db.deleteTodo(created.id!);
    const found = await db.getTodo(created.id!);

    expect(found).toBeUndefined();
  });
});
