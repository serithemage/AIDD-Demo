import { memo } from 'react';
import { Todo } from '../../types/todo';

/**
 * TodoList 컴포넌트의 Props 타입 정의
 */
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Todo 목록 컴포넌트
 * 
 * @param todos - 표시할 할 일 목록
 * @param onToggle - 할 일 완료 상태 토글 핸들러
 * @param onDelete - 할 일 삭제 핸들러
 */
export const TodoList = memo(({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return <p className="empty-message">할 일이 없습니다</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-content">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="todo-checkbox"
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              aria-label="삭제"
            >
              ✕
            </button>
          </div>
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </li>
      ))}
    </ul>
  );
});
