# 📚 프로그래밍 패턴 가이드

## 1. 🏗️ SOLID 원칙
- **단일 책임 원칙 (Single Responsibility Principle)**
  - 하나의 클래스/컴포넌트는 하나의 책임만 가져야 함
  - 예: Todo 컴포넌트는 Todo 항목 표시만 담당, 상태 관리는 별도 훅으로 분리

- **개방-폐쇄 원칙 (Open-Closed Principle)**
  - 확장에는 열려있고, 수정에는 닫혀있어야 함
  - 예: 새로운 Todo 상태 추가 시 기존 코드 수정 없이 확장 가능하도록 설계

- **리스코프 치환 원칙 (Liskov Substitution Principle)**
  - 하위 타입은 상위 타입을 대체할 수 있어야 함
  - 예: Todo 아이템의 다양한 타입(일반, 중요, 반복)이 기본 인터페이스를 준수

- **인터페이스 분리 원칙 (Interface Segregation Principle)**
  - 클라이언트는 자신이 사용하지 않는 인터페이스에 의존하지 않아야 함
  - 예: Todo 조작 훅을 생성/수정/삭제 등 작은 단위로 분리

- **의존성 역전 원칙 (Dependency Inversion Principle)**
  - 상위 모듈은 하위 모듈에 의존하지 않아야 함
  - 예: 데이터 저장소를 인터페이스로 추상화하여 구현체(Dexie.js) 교체 가능하도록 설계

## 2. 🧪 테스트 주도 개발 (TDD)
- **레드-그린-리팩터 사이클**
  1. 실패하는 테스트 작성 (Red)
  2. 테스트 통과하는 최소한의 코드 작성 (Green)
  3. 코드 개선 (Refactor)

- **테스트 종류**
  - 단위 테스트: 개별 컴포넌트/함수 테스트
  - 통합 테스트: 컴포넌트 간 상호작용 테스트
  - E2E 테스트: 사용자 시나리오 기반 테스트

## 3. 🏭 디자인 패턴
- **생성 패턴**
  - Factory: Todo 아이템 생성 로직 캡슐화
  - Builder: 복잡한 Todo 객체 생성 단순화
  - Singleton: 전역 상태 관리

- **구조 패턴**
  - Adapter: 외부 라이브러리 인터페이스 통일
  - Composite: Todo 아이템 그룹화
  - Decorator: Todo 아이템에 추가 기능 동적 부여

- **행위 패턴**
  - Observer: 상태 변경 시 UI 자동 업데이트
  - Strategy: 다양한 정렬/필터링 전략 구현
  - Command: Todo 작업의 실행/취소 기능

## 4. 🎨 React 패턴
- **컴포넌트 패턴**
  - Presentational/Container 분리
  - Compound Components
  - Render Props
  - Custom Hooks

- **상태 관리 패턴**
  - Lifting State Up
  - Context API 활용
  - Reducer 패턴

## 5. 🔧 클린 코드 원칙
- **명명 규칙**
  - 의미 있는 변수/함수 이름
  - 일관된 명명 컨벤션
  - 약어 사용 자제

- **함수 설계**
  - 작은 크기 유지
  - 단일 책임
  - 순수 함수 지향

- **주석 작성**
  - 코드로 표현할 수 없는 내용만 주석화
  - 문서화 주석 활용
  - 주기적인 주석 업데이트

## 6. 🔄 지속적 통합/배포 (CI/CD)
- 자동화된 테스트 실행
- 코드 품질 검사
- 자동 배포 파이프라인
- 버전 관리 전략 (Git Flow)

## 7. 🎯 성능 최적화 패턴
- 메모이제이션 (useMemo, useCallback)
- 코드 스플리팅
- 레이지 로딩
- 캐싱 전략

## 8. 🛡️ 보안 패턴
- 입력 데이터 검증
- XSS 방지
- CSRF 대책
- 안전한 데이터 저장
