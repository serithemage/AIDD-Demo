import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('제목과 다크모드 토글 버튼을 렌더링해야 한다', () => {
    render(<Header />);

    // 제목이 렌더링되었는지 확인
    expect(screen.getByText('할 일 관리')).toBeInTheDocument();

    // 다크모드 토글 버튼이 렌더링되었는지 확인
    expect(screen.getByRole('button', { name: '다크 모드 전환' })).toBeInTheDocument();
  });

  it('다크모드 토글 버튼을 클릭하면 다크모드가 전환되어야 한다', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', { name: '다크 모드 전환' });
    
    // 초기 상태는 라이트 모드 (🌙 아이콘)
    expect(toggleButton.textContent).toBe('🌙');

    // 버튼 클릭
    fireEvent.click(toggleButton);

    // 다크 모드로 전환 (🌞 아이콘)
    expect(toggleButton.textContent).toBe('🌞');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // 다시 버튼 클릭
    fireEvent.click(toggleButton);

    // 라이트 모드로 전환 (🌙 아이콘)
    expect(toggleButton.textContent).toBe('🌙');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
