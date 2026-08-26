# gonsuit.com 프로젝트 개발 계획서 (Project Development Plan)

> ## ✅ 1차 런칭 완료 — 아카이브(동결) 문서
> 이 문서는 gonsuit.com 초기 4주 런칭 계획의 **완료 기록**입니다. 사이트는 출시되어 운영 중입니다.
> **이후의 진행중/예정 작업과 현재 상태는 `CLAUDE.md`가 관리합니다.** 이 문서는 히스토리 참조용으로만 두며, 새 작업 계획을 여기에 추가하지 않습니다.
> (아래 체크리스트의 미완료 `[ ]` 항목 중 일부는 방향이 바뀌어 폐기되었습니다 — 예: `/resources` PDF 판매 → 제거.)

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
- [x] **홈 서비스 카드**: 운영 중 개발 상품 카드 UI (상태 뱃지 포함). (별도 `/services` 대신 홈 `#services` 섹션으로 구현)
- [x] **About 페이지 (`/about`)**: 고앤슈트 철학 및 운영 방식 소개.
- [x] **개인정보처리방침 (`/privacy`)**: 공용 방침 + 앱별(AdMob·Groq AI·국외이전) 고지 섹션.

### 2주차: 콘텐츠 & 수익 기능 구현 (Monetization & Content)
- [~] ~~**Resources 페이지 (`/resources`)**: PDF 가이드 + Gumroad~~ → **폐기·제거** (`/lab` 리다이렉트). 수익 축을 개발 앱 광고로 전환.
- [x] **Lab 페이지 (`/lab`)**: 블로그 목록 및 상세 페이지 (`/lab/[slug]`) SSG 구현.
- [~] ~~첫 PDF 가이드 콘텐츠~~ → 폐기 (Resources 제거).

### 3주차: 빠른 런칭 및 운영 안정화 (SEO & Launch)
- [x] **SEO 최적화**: `sitemap.ts`, `robots.ts`, OG 태그, 페이지별 메타데이터, JSON-LD. (상세 규칙은 CLAUDE.md)
- [x] **Analytics 연동**: Vercel Analytics + Google Analytics 4 (G-WF5QHV9GXV) + GA4 커스텀 이벤트.

### 4주차: 마감 및 고도화
- [x] **도메인 연결**: gonsuit.com Vercel 연결 + Cloudflare DNS(Proxy OFF) + HTTPS.
- [ ] **반응형 디자인 점검**: 모바일/태블릿 레이아웃 QA. *(상시 개선 항목 — CLAUDE.md로 이관)*
- [ ] **퍼포먼스 최적화**: Lighthouse 90+ 목표. *(상시 개선 항목 — CLAUDE.md로 이관)*
- [ ] **소셜 채널 연동**: Build in Public 채널 링크. *(미정 — CLAUDE.md로 이관)*

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
> [!NOTE]
> 아래는 런칭 당시 사용자 협조 요청이었으며, 모두 처리 완료되었습니다 (Gumroad 항목은 Resources 폐기로 무효).
> - [x] **도메인 설정**: gonsuit.com Vercel + Cloudflare DNS 연결 완료.
> - [~] ~~Gumroad 계정~~ → Resources 폐기로 불필요.
> - [x] **콘텐츠 방향**: `/lab` 초기 포스트(바이브코딩 팁 중심) 등록 완료.
> - **데이터 관리(정정)**: ~~이 문서에 중앙 집중화~~ → **현재 상태·진행 작업의 단일 진실원은 `CLAUDE.md`**. 이 문서는 런칭 아카이브로 동결.

---

*연동 문서: 현재 구현·상품 상태 → `CLAUDE.md` / 제품 요구사항 → `1_PRD.md` / 장기 전략 → `4_LRP.md`*
