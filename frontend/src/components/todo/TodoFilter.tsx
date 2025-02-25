import { ChangeEvent } from 'react';

/**
 * 할 일 필터 타입
 */
export type TodoFilter = 'all' | 'active' | 'completed';

/**
 * TodoFilter 컴포넌트의 Props 타입 정의
 */
interface TodoFilterProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

/**
 * 할 일 필터 컴포넌트
 * 
 * @param filter - 현재 선택된 필터
 * @param onFilterChange - 필터 변경 시 호출될 콜백 함수
 */
export const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value as TodoFilter);
  };

  return (
    <div className="todo-filter">
      <select
        value={filter}
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="all">모든 할 일</option>
        <option value="active">미완료</option>
        <option value="completed">완료</option>
      </select>
    </div>
  );
};
