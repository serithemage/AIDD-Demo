import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from '../TodoForm';
import { describe, it, expect, vi } from 'vitest';

describe('TodoForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('폼이 정상적으로 렌더링되어야 한다', () => {
    render(<TodoForm onSubmit={mockOnSubmit} />);
    
    expect(screen.getByPlaceholderText('할 일을 입력하세요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('입력값이 없을 때 제출하면 에러 메시지를 표시해야 한다', () => {
    render(<TodoForm onSubmit={mockOnSubmit} />);
    
    const submitButton = screen.getByRole('button', { name: '추가' });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('할 일을 입력해주세요')).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('입력값이 있을 때 제출하면 onSubmit이 호출되어야 한다', () => {
    render(<TodoForm onSubmit={mockOnSubmit} />);
    
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const submitButton = screen.getByRole('button', { name: '추가' });
    
    fireEvent.change(input, { target: { value: '새로운 할 일' } });
    fireEvent.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledWith('새로운 할 일');
    expect(screen.queryByText('할 일을 입력해주세요')).not.toBeInTheDocument();
  });

  it('제출 후 입력값이 초기화되어야 한다', () => {
    render(<TodoForm onSubmit={mockOnSubmit} />);
    
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const submitButton = screen.getByRole('button', { name: '추가' });
    
    fireEvent.change(input, { target: { value: '새로운 할 일' } });
    fireEvent.click(submitButton);
    
    expect(input).toHaveValue('');
  });
});
