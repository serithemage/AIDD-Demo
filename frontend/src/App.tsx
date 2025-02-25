import { useState, useCallback } from 'react';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { TodoList } from './components/todo/TodoList';
import { Todo } from './types/todo';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  const handleAddTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <Layout isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode}>
      <MainContent onAddTodo={handleAddTodo}>
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </MainContent>
    </Layout>
  );
}

export default App;
