import { useState } from 'react';

/**
 * 애플리케이션의 헤더 컴포넌트
 * 
 * @returns 헤더 컴포넌트를 렌더링합니다.
 */
export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            할 일 관리
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            aria-label="다크 모드 전환"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};
