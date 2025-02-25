/**
 * Todo 아이템의 상태를 나타내는 타입
 */
export type TodoStatus = 'todo' | 'in-progress' | 'done' | 'hold';

/**
 * Todo 아이템의 기본 인터페이스
 */
export interface TodoItem {
  id?: number;        // 자동 생성되는 primary key
  title: string;      // 할 일 제목
  description: string;// 상세 설명
  dueDate?: Date;     // 마감일 (선택)
  status: TodoStatus; // 상태
  createdAt: Date;    // 생성일
  updatedAt: Date;    // 수정일
}

/**
 * Todo 생성을 위한 DTO (Data Transfer Object) 인터페이스
 */
export interface CreateTodoDTO {
  title: string;
  description: string;
  dueDate?: Date;
  status?: TodoStatus;
}
