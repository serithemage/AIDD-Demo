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
    <header className="header">
      <div className="header-content">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          할 일 관리
        </h1>
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label="다크 모드 전환"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};
