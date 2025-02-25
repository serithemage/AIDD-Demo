import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoFilter } from '../TodoFilter';

describe('TodoFilter', () => {
  it('필터 옵션이 모두 표시되어야 한다', () => {
    const onFilterChange = vi.fn();
    render(<TodoFilter filter="all" onFilterChange={onFilterChange} />);

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveValue('all');
    expect(options[1]).toHaveValue('active');
    expect(options[2]).toHaveValue('completed');
  });

  it('필터 변경 시 onFilterChange가 호출되어야 한다', () => {
    const onFilterChange = vi.fn();
    render(<TodoFilter filter="all" onFilterChange={onFilterChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'completed' } });

    expect(onFilterChange).toHaveBeenCalledWith('completed');
  });

  it('현재 선택된 필터가 표시되어야 한다', () => {
    const onFilterChange = vi.fn();
    render(<TodoFilter filter="completed" onFilterChange={onFilterChange} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('completed');
  });
});
