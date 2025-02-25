import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from '../TodoList';
import { describe, it, expect, vi } from 'vitest';
import { Todo } from '../../../types/todo';

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    { id: '1', text: '첫 번째 할 일', completed: false, createdAt: new Date() },
    { id: '2', text: '두 번째 할 일', completed: true, createdAt: new Date() },
  ];

  const mockOnToggle = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    mockOnToggle.mockClear();
    mockOnDelete.mockClear();
  });

  it('할 일 목록이 없을 때 메시지를 표시해야 한다', () => {
    render(
      <TodoList todos={[]} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('할 일이 없습니다')).toBeInTheDocument();
  });

  it('할 일 목록을 올바르게 렌더링해야 한다', () => {
    render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('첫 번째 할 일')).toBeInTheDocument();
    expect(screen.getByText('두 번째 할 일')).toBeInTheDocument();
  });

  it('완료 상태를 토글할 수 있어야 한다', () => {
    render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    
    expect(mockOnToggle).toHaveBeenCalledWith('1');
  });

  it('할 일을 삭제할 수 있어야 한다', () => {
    render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    
    const deleteButtons = screen.getAllByRole('button', { name: '삭제' });
    fireEvent.click(deleteButtons[0]);
    
    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});
