import { ReactNode } from 'react';
import { TodoForm } from '../todo/TodoForm';

/**
 * 메인 컨텐츠 컴포넌트 Props 타입 정의
 */
interface MainContentProps {
  children: ReactNode;
  onAddTodo: (text: string) => void;
}

/**
 * 메인 컨텐츠 컴포넌트
 * 앱의 주요 컨텐츠를 감싸는 레이아웃 컴포넌트
 */
export const MainContent = ({ children, onAddTodo }: MainContentProps) => {
  return (
    <main className="main-content">
      <div className="content-card">
        <section className="section">
          <h2 className="section-title">할 일 추가</h2>
          <TodoForm onSubmit={onAddTodo} />
        </section>
        <section className="section">
          <h2 className="section-title">할 일 목록</h2>
          {children}
        </section>
      </div>
    </main>
  );
};
