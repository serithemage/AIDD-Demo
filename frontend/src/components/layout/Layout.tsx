import { ReactNode } from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';

interface LayoutProps {
  children: ReactNode;
}

/**
 * 전체 애플리케이션의 레이아웃을 관리하는 컴포넌트
 * 
 * @param children - 레이아웃 내부에 표시될 자식 컴포넌트들
 * @returns 전체 레이아웃을 렌더링합니다.
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
};
