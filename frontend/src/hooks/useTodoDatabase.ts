import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../types/todo';
import { db } from '../services/todo-database';

/**
 * Todo 데이터베이스를 사용하기 위한 커스텀 훅
 * @returns Todo 데이터와 관련 메서드들을 반환합니다.
 */
export const useTodoDatabase = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 모든 할 일 목록을 가져옵니다.
  const loadTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const loadedTodos = await db.getAllTodos();
      setTodos(loadedTodos);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('할 일 목록을 불러오는데 실패했습니다.'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 새로운 할 일을 추가합니다.
  const addTodo = useCallback(async (text: string) => {
    try {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date(),
      };
      await db.addTodo(newTodo);
      setTodos(prev => [...prev, newTodo]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('할 일을 추가하는데 실패했습니다.'));
      return false;
    }
  }, []);

  // 할 일의 완료 상태를 토글합니다.
  const toggleTodo = useCallback(async (id: string) => {
    try {
      const success = await db.toggleTodo(id);
      if (success) {
        setTodos(prev =>
          prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
      return success;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('할 일 상태를 변경하는데 실패했습니다.'));
      return false;
    }
  }, []);

  // 할 일을 삭제합니다.
  const deleteTodo = useCallback(async (id: string) => {
    try {
      await db.deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('할 일을 삭제하는데 실패했습니다.'));
      return false;
    }
  }, []);

  // 컴포넌트가 마운트될 때 할 일 목록을 불러옵니다.
  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return {
    todos,
    isLoading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
