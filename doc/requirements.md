# TODO 애플리케이션 요건 정의

## 1. 프로젝트 개요
TODO 애플리케이션은 사용자가 일상적인 작업과 할 일을 관리할 수 있는 웹 기반 애플리케이션입니다.

## 2. 주요 기능 요구사항 정의를 위한 질문

### 2.1 사용자 관리
- 사용자 인증이 필요한가요?
  - 데모니까 사용자 인증 없이 쓸 수 있게 해줘.

### 2.2 TODO 항목 관리
- TODO 항목에 어떤 정보들이 포함되어야 하나요?
  - 제목
  - 상세 설명
  - 마감일
- TODO 상태 관리는 어떻게 해야 하나요?
  - 기본적인 상태 (미완료, 완료, 진행중, 보류)


### 2.3 UI/UX 요구사항
- 모바일 지원이 필요한가요?
  - Yes
- 다크모드가 필요한가요?
  - Yes
- 필터링과 정렬 기능이 필요한가요?
  - 날짜별
  - 우선순위별
  - 카테고리별

### 2.4 데이터 관리
- Dexie.js (IndexedDB 래퍼)를 사용한 데이터 모델
  - Todo 테이블 스키마
    ```typescript
    interface Todo {
      id?: number;        // 자동 생성되는 primary key
      title: string;      // 할 일 제목
      description: string;// 상세 설명
      dueDate?: Date;     // 마감일 (선택)
      status: 'todo' | 'in-progress' | 'done' | 'hold'; // 상태
      createdAt: Date;    // 생성일
      updatedAt: Date;    // 수정일
    }
    ```
  - 오프라인 지원 자동화
  - 브라우저 저장소 활용으로 별도 서버 불필요

## 3. 기술 스택 관련 질문
- 프론트엔드 구성
  - SPA (Single Page Application) 구조
  - 데이터베이스: Dexie.js 3.x
  - 상태 관리: 프레임워크 내장 상태 관리 도구 활용
  - UI 컴포넌트: Tailwind CSS
  - 반응형 디자인: 모바일 우선 접근
  - 다크모드 지원
- 프론트엔드 프레임워크 선택
  - React
- 백엔드 기술 스택
  - 데모라서 처음은 사용하지 않을거임.

## 4. 개발 환경 및 배포
- 개발 환경 설정
  - Node.js 기반 개발 환경
  - TypeScript 사용으로 타입 안정성 확보
  - ESLint + Prettier 조합으로 코드 품질 관리
- 배포 환경
  - GitHub Pages를 통한 정적 호스팅
  - PWA (Progressive Web App) 지원 고려
