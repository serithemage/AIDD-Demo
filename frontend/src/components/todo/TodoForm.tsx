import { useState, useCallback, FormEvent } from 'react';

/**
 * TodoForm 컴포넌트의 Props 타입 정의
 */
interface TodoFormProps {
  onSubmit: (text: string) => void;
}

/**
 * Todo 입력 폼 컴포넌트
 * 
 * @param onSubmit - 폼 제출 시 호출될 콜백 함수
 */
export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('할 일을 입력해주세요');
      return;
    }

    onSubmit(text.trim());
    setText('');
    setError('');
  }, [text, onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          placeholder="할 일을 입력하세요"
          className="todo-input"
        />
        <button type="submit" className="submit-button">
          추가
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};
