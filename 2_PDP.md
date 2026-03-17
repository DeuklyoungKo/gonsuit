# gonsuit.com 프로젝트 개발 계획서 (Project Development Plan)

이 문서는 gonsuit.com 허브 사이트를 4주 안에 개발하고 운영 가능한 상태로 출시하기 위한 상세 로드맵을 정의합니다.

---

## 1. 프로젝트 목표
- **도메인**: `https://gonsuit.com`
- **허브 사이트 출시**: 운영 중인 서비스들의 신뢰 기반 + 자체 수익 채널로 기능하는 사이트 완성.
- **콘텐츠 자산 축적**: 바이브코딩 팁, 개발 가이드 등 SEO 트래픽 유입 경로 구축.
- **빠른 런칭**: 부가 기능 배제 및 핵심 브랜드 정보 제공을 통해 최소 기능으로 빠르게 시장에 출시.

---

## 2. 개발 일정 및 마일스톤 (4주)

### 1주차: 기반 구조 및 핵심 페이지 구축 (Foundation)
- [x] **프로젝트 초기화**: Next.js 14 (App Router) + Tailwind CSS 세팅, Vercel 연동.
- [x] **Supabase 연동**: `contacts` 등 테이블 스키마 설계 및 생성.
- [x] **홈페이지 (`/`)**: 비전 섹션, 서비스 카드 목록, Build in Public 문구 적용.
- [x] **문의 페이지 (`/contact`)**: 협업 문의 폼 구현, Supabase 저장 및 Resend 메일 알림 연동.
- [x] **메일 시스템 구축**: Cloudflare Email Routing + Resend 도메인 인증 완료.
- [ ] **서비스 목록 (`/services`)**: 운영 중 서비스 카드 UI (상태 뱃지 포함).
- [ ] **About 페이지 (`/about`)**: 고앤슈트 철학 및 운영 방식 소개.
- [ ] **개인정보처리방침 (`/privacy`)**: 공용 방침 페이지 + Trend Intelligence 추가 고지 섹션.

### 2주차: 콘텐츠 & 수익 기능 구현 (Monetization & Content)
- [ ] **Resources 페이지 (`/resources`)**: PDF 가이드 상품 카드 UI, Gumroad 외부 링크 연동.
- [ ] **Lab 페이지 (`/lab`)**: 바이브코딩 팁 블로그 목록 및 상세 페이지 (`/lab/[slug]`) 구현.
- [ ] **첫 번째 PDF 가이드 콘텐츠**: "0원으로 마이크로 SaaS 만드는 법" 초안 작성 및 Gumroad 등록.

### 3주차: 빠른 런칭 및 운영 안정화 (SEO & Launch)
- [ ] **SEO 최적화**: `sitemap.xml`, `robots.txt`, OG 태그, 홈 및 필수 페이지별 메타데이터 설정.
- [ ] **Analytics 연동**: Vercel Analytics 또는 Google Analytics 세팅.

### 4주차: 마감 및 고도화
- [ ] **반응형 디자인 점검**: 모바일/태블릿 레이아웃 QA.
- [ ] **퍼포먼스 최적화**: Lighthouse 점수 90점 이상 목표.
- [ ] **도메인 연결**: gonsuit.com 도메인 Vercel 연결 및 HTTPS 설정 점검.
- [ ] **소셜 채널 연동**: X(트위터), 인스타그램 등 Build in Public 채널 링크 안내.

---

## 3. 상세 구현 계획 (Implementation Details)

### 네비게이션 구조
```
[gonsuit.com]  서비스  Lab  Resources  About
```

### Supabase 테이블 스키마

**`contacts` (협업 문의)**
```sql
id            uuid primary key default uuid_generate_v4()
name          text not null
email         text not null
category      text not null
subject       text not null
message       text not null
created_at    timestamp with time zone default now()
```

**`resources`**
```sql
id            uuid primary key
title         text
description   text
price_usd     numeric
gumroad_url   text
thumbnail_url text
created_at    timestamp default now()
```



### PDF 가이드 판매 플로우
```
Resources 페이지 → 상품 카드 클릭 → Gumroad 결제 페이지 → 자동 다운로드
```
초기에는 Gumroad 외부 연동으로 결제 시스템 구축 없이 즉시 시작. 월 매출 $200 이상 시 자체 결제 시스템 전환 검토.

---

## 4. 향후 운영 계획

### 성장 단계별 주요 액션
| 단계 | 기준 (수치적 지표 유입 등) | 목표 액션 |
|------|------|------|
| 1단계 | 허브 사이트 런칭 | `1_PRD.md`에 명시된 핵심 서비스 연동 및 노출 극대화 |
| 2단계 | 월 방문자 500명 돌파 지속 | PDF 가이드 판매 등 검증 |
| 3단계 | Lab 콘텐츠 누적 (10뷰+ 달성/주) | 검색 트래픽 비중 증가 |
| 4단계 | 수익성/방문자 확장 필요 시점 | 뉴스레터나 부가가치 서비스 도입 재검토 |

---

## 5. 사용자 협조 사항 (User Action Required)
> [!IMPORTANT]
> - **도메인 설정**: gonsuit.com 도메인의 Vercel DNS 연결은 1주차 내 완료 필요.
> - **Gumroad 계정**: PDF 가이드 판매를 위한 Gumroad 계정 사전 생성 필요.
> - **콘텐츠 방향**: `/lab` 블로그의 첫 3개 포스트 주제 확정 필요 (바이브코딩 팁 중심).
> - **데이터 관리**: 모든 개발 계획과 진행 상황은 이 문서(`2.PDP.md`)에 중앙 집중화하여 관리.

---

*참조 및 연동: [1.PRD.md](./1_PRD.md)*
