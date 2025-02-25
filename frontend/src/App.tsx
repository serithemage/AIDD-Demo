import { useState, useCallback } from 'react';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { TodoList } from './components/todo/TodoList';
import { useTodoDatabase } from './hooks/useTodoDatabase';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { todos, isLoading, error, addTodo, toggleTodo, deleteTodo } = useTodoDatabase();

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  if (error) {
    return (
      <Layout isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode}>
        <div className="error-container">
          <p className="error-message">오류가 발생했습니다: {error.message}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode}>
      <MainContent onAddTodo={addTodo}>
        {isLoading ? (
          <div className="loading-container">
            <p className="loading-message">할 일 목록을 불러오는 중...</p>
          </div>
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
      </MainContent>
    </Layout>
  );
}

export default App;
