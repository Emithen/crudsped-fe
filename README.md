# 🛠 프로젝트 설정 개요

## ✅ 셋팅되어있는 것

- **빌드 도구:** Vite

  - 빠른 개발 서버와 번들링 속도
  - ESM 기반 모듈 처리
  - React, TS, 환경변수 등 기본적인 개발 환경 구성 완료

- **패키지 매니저:** pnpm

---

## 🧩 앞으로 셋팅해야 할 것

### 1. 라우팅 전략 (Routing)

- **React Router v6** 사용 예정

  - SPA 라우팅 구성
  - 페이지 단위 코드 스플리팅(`lazy`, `Suspense`) 적용
  - 로그인/권한 페이지를 위한 Private Route 구성
  - `/pages` 폴더 기반 라우트 구조 정리

---

### 2. 네트워크 (API 통신)

- **axios** 기반 HTTP 클라이언트 설정

  - baseURL, timeout, 인터셉터 등 공통 설정 추가
  - 토큰 기반 인증 처리 구조 추가

- **React Query**를 사용한 서버 상태 관리

  - API 캐싱, invalidate, 로딩/에러 핸들링 표준화
  - `useQuery`, `useMutation` 기반 데이터 패칭 구조 확립

---

### 3. 스타일 관련 라이브러리

- **Tailwind CSS** 도입 예정

  - 빠른 UI 스타일링
  - 반응형/다크모드 등 유틸리티 기반 스타일 구축

---

### 4. ESLint & 코드 규칙

- ESLint + Prettier 설정

  - 코드 포맷팅·규칙 통일
  - `eslint-config-airbnb` 또는 `eslint-config-next` 레벨의 확장 규칙 적용 고려
  - import 순서 정렬 플러그인 추가

---

### 5. 상태 관리

- **전역 상태:** Zustand 또는 Redux

  - 간단한 글로벌 UI 상태 관리
  - React Query와 역할 분리 (서버 상태 vs 클라이언트 상태)

---
