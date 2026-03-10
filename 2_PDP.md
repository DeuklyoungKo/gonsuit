# gonsuit.com 프로젝트 개발 계획서 (Project Development Plan)

이 문서는 gonsuit.com 허브 사이트를 4주 안에 개발하고 운영 가능한 상태로 출시하기 위한 상세 로드맵을 정의합니다.

---

## 1. 프로젝트 목표
- **허브 사이트 출시**: 운영 중인 서비스들의 신뢰 기반 + 자체 수익 채널로 기능하는 사이트 완성.
- **콘텐츠 자산 축적**: 바이브코딩 팁, AI 뉴스 큐레이션 등 SEO 트래픽 유입 경로 구축.
- **수익 검증**: PDF 가이드 첫 판매 및 뉴스레터 구독자 50명 달성.
- **AI 뉴스 Beta 운영**: 분리 기준(월 1,000명/구독 100명) 충족 여부를 데이터로 판단.

---

## 2. 개발 일정 및 마일스톤 (4주)

### 1주차: 기반 구조 및 핵심 페이지 구축 (Foundation)
- [ ] **프로젝트 초기화**: Next.js 14 (App Router) + Tailwind CSS 세팅, Vercel 연동.
- [ ] **Supabase 연동**: `newsletter_subscribers`, `ai_news`, `resources` 테이블 스키마 설계 및 생성.
- [ ] **홈페이지 (`/`)**: 비전 섹션, 서비스 카드 목록, 최근 빌딩 스토리 레이아웃 구현.
- [ ] **서비스 목록 (`/services`)**: 운영 중 서비스 카드 UI (상태 뱃지 포함).
- [ ] **About 페이지 (`/about`)**: gonsuit 철학 및 운영 방식 소개.
- [ ] **개인정보처리방침 (`/privacy`)**: 공용 방침 페이지 + Trend Scouter 추가 고지 섹션.

### 2주차: 콘텐츠 & 수익 기능 구현 (Monetization)
- [ ] **뉴스레터 구독 폼**: 홈 + 각 페이지 하단에 이메일 구독 UI 추가, Supabase 저장 연동.
- [ ] **Resources 페이지 (`/resources`)**: PDF 가이드 상품 카드 UI, Gumroad 외부 링크 연동.
- [ ] **Lab 페이지 (`/lab`)**: 바이브코딩 팁 블로그 목록 및 상세 페이지 (`/lab/[slug]`) 구현.
- [ ] **첫 번째 PDF 가이드 콘텐츠**: "0원으로 마이크로 SaaS 만드는 법" 초안 작성 및 Gumroad 등록.

### 3주차: AI 뉴스 Beta 및 SEO 최적화 (Growth)
- [ ] **AI 뉴스 스크래퍼 구축**: GitHub Actions 스케줄 잡으로 주요 AI 뉴스 소스 수집 자동화.
- [ ] **AI 요약 엔진**: Gemini API를 활용한 뉴스 요약 + "한국 창업가 관점 인사이트" 자동 생성.
- [ ] **AI 뉴스 페이지 (`/ai-news`)**: Beta 뱃지, 뉴스 카드 목록, 메인 네비 미포함(홈 하단 카드 노출).
- [ ] **SEO 최적화**: `sitemap.xml`, `robots.txt`, OG 태그, 페이지별 메타데이터 설정.
- [ ] **Analytics 연동**: Vercel Analytics 또는 Google Analytics 세팅.

### 4주차: 마감 및 런칭 (Launch)
- [ ] **반응형 디자인 점검**: 모바일/태블릿 레이아웃 QA.
- [ ] **퍼포먼스 최적화**: Lighthouse 점수 90점 이상 목표.
- [ ] **도메인 연결**: gonsuit.com 도메인 Vercel 연결 및 HTTPS 설정.
- [ ] **소셜 채널 연동**: X(트위터), 인스타그램 등 Build in Public 채널 링크 추가.
- [ ] **베타 공개 및 뉴스레터 구독자 모집 시작**.

---

## 3. 상세 구현 계획 (Implementation Details)

### 네비게이션 구조
```
[gonsuit.com]  서비스  Lab  Resources  About
                  (AI 뉴스는 홈 하단 카드에만 노출 - Beta)
```

### Supabase 테이블 스키마

**`newsletter_subscribers`**
```sql
id            uuid primary key
email         text unique not null
source        text   -- 'home', 'lab', 'ai-news' 등 유입 경로
created_at    timestamp default now()
```

**`ai_news`**
```sql
id            uuid primary key
title         text
url           text unique
source        text   -- 'techcrunch', 'arxiv' 등
summary       text   -- AI 생성 한국어 요약
insight       text   -- 한국 창업가 관점 인사이트
published_at  timestamp
created_at    timestamp default now()
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

### AI 뉴스 파이프라인
- **Process**: GitHub Actions (매일 오전 9시 KST) → 뉴스 수집 → Gemini API 요약 + 인사이트 생성 → Supabase 저장 → 페이지 자동 업데이트.
- **수집 소스 (1차)**: TechCrunch AI, The Verge AI, Hacker News Top Stories, X Trending (AI 태그).
- **차별화 포인트**: 단순 번역이 아닌 "이 뉴스가 한국 1인 창업가에게 왜 중요한가" 코멘트 자동 생성.

### PDF 가이드 판매 플로우
```
Resources 페이지 → 상품 카드 클릭 → Gumroad 결제 페이지 → 자동 다운로드
```
초기에는 Gumroad 외부 연동으로 결제 시스템 구축 없이 즉시 시작. 월 매출 $200 이상 시 자체 결제 시스템 전환 검토.

---

## 4. 향후 운영 계획

### AI 뉴스 서비스 분리 시점 판단
| 지표 | 현재 | 분리 기준 |
|------|------|-----------|
| 월 방문자 | - | 1,000명 |
| 뉴스레터 구독 | 0명 | 100명 |
| 평균 체류 시간 | - | 2분 이상 |

### 단계별 수익 목표
| 단계 | 조건 | 액션 |
|------|------|------|
| 1단계 | 뉴스레터 구독 50명 | PDF 가이드 첫 출시 |
| 2단계 | 월 방문자 500명 | 애드센스 승인 신청 |
| 3단계 | 뉴스레터 구독 300명 | 커뮤니티 기능 도입 검토 |
| 4단계 | AI 뉴스 분리 기준 충족 | 별도 서비스로 분리 |

---

## 5. 사용자 협조 사항 (User Action Required)
> [!IMPORTANT]
> - **도메인 설정**: gonsuit.com 도메인의 Vercel DNS 연결은 1주차 내 완료 필요.
> - **Gumroad 계정**: PDF 가이드 판매를 위한 Gumroad 계정 사전 생성 필요.
> - **콘텐츠 방향**: `/lab` 블로그의 첫 3개 포스트 주제 확정 필요 (바이브코딩 팁 중심).
> - **데이터 관리**: 모든 개발 계획과 진행 상황은 이 문서(`2.PDP.md`)에 중앙 집중화하여 관리.

---

*참조 및 연동: [1.PRD.md](./1_PRD.md)*
