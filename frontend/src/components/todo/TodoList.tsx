import { useState, useMemo } from 'react';
import { Todo } from '../../types/todo';
import { TodoFilter, TodoFilter as FilterType } from './TodoFilter';

/**
 * TodoList 컴포넌트의 Props 타입 정의
 */
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * 할 일 목록 컴포넌트
 */
export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  if (todos.length === 0) {
    return <p className="empty-message">할 일이 없습니다.</p>;
  }

  return (
    <div className="todo-list-container">
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <ul className="todo-list">
        {filteredTodos.map(todo => (
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
              <span className="todo-date">
                {new Date(todo.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              aria-label="할 일 삭제"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
