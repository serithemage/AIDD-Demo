import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('헤더와 메인 컨텐츠를 렌더링해야 한다', () => {
    const testContent = '테스트 컨텐츠';
    render(<Layout>{testContent}</Layout>);

    // 헤더가 렌더링되었는지 확인
    expect(screen.getByText('할 일 관리')).toBeInTheDocument();

    // 메인 컨텐츠가 렌더링되었는지 확인
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
