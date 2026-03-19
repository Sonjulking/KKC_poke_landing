# ⚡️ KKC Landing Page (Pokemon Theme) ⚡️

포켓몬스터 컨셉으로 제작된 개인 포트폴리오 랜딩 페이지입니다. 레트로한 배틀 메뉴 UI와 도감(포트폴리오) 스타일의 인터페이스를 제공합니다.

## ✨ 주요 기능

- 🪪 **프로필 카드 (Profile Card)**: 트레이너(작업자)의 상태 및 정보를 보여주는 포켓몬스터 스타일의 카드
- ⚔️ **배틀 메뉴 UI (Battle Menu)**: 포켓몬 배틀 화면을 연상케 하는 인터랙티브한 메뉴 디자인
- 📖 **포트폴리오 리스트 & 디테일 (Portfolio Data)**: 포켓몬 도감을 보는 듯한 느낌의 프로젝트 모음
- 🌕 **다크/라이트 모드 (Theme Toggle)**: 시스템 설정에 따른 다크/라이트 모드 지원
- 💬 **타이핑 효과 (Typing Text)**: 게임 텍스트 박스처럼 한 글자씩 출력되는 타이핑 애니메이션
- 🎯 **캡처 모달 (Capture Modal)**: 특정 동작 시 나타나는 상호작용 가능한 모달 창

## 🛠️ 사용된 기술 및 라이브러리

- **[Next.js (v16)](https://nextjs.org/)**: React 기반의 프레임워크 
- **[React (v19)](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**: 정적 타입 체크를 통한 안정성 확보
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: 유틸리티 클래스 기반의 빠르고 직관적인 UI 스타일링
- **[Framer Motion](https://www.framer.com/motion/)**: 자연스럽고 화려한 UI 애니메이션 및 모션 효과 구현
- **[React Icons](https://react-icons.github.io/react-icons/)**: 배틀 메뉴 및 주요 UI 요소에 사용되는 다채로운 아이콘 세트
- **[next-themes](https://github.com/pacocoursey/next-themes)**: 손쉬운 다크 모드 및 라이트 모드 테마 토글 기능 관리
- **[Galmuri 폰트 (갈무리)](https://galmuri.uwu.network/)**: 포켓몬스터 게임 특유의 레트로한 8비트 픽셀(도트) 감성을 살리기 위한 픽셀 아트 폰트

## 🚀 시작하기

이 프로젝트는 `create-next-app`으로 초기화되었습니다.

### 1. 패키지 설치
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. 개발 서버 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 주소로 접속하여 랜딩 페이지를 확인하실 수 있습니다.

## 📂 프로젝트 주요 구조

- `src/app/`: 라우팅(Routing) 및 전역 레이아웃 설정
- `src/components/`: 프로필 카드, 배틀 메뉴 등 핵심 UI 공통 컴포넌트
- `src/data/`: 포트폴리오에 사용되는 목업 데이터 관리 (`portfolioData.ts`)
