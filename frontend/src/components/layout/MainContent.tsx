import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

/**
 * 메인 컨텐츠 영역을 위한 레이아웃 컴포넌트
 * 
 * @param children - 메인 컨텐츠 영역에 표시될 자식 컴포넌트들
 * @returns 메인 컨텐츠 레이아웃을 렌더링합니다.
 */
export const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {children}
      </div>
    </main>
  );
};
