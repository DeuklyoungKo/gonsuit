# CLAUDE.md — 고앤슈트 (Go & Suit) 프로젝트 가이드

## 프로젝트 개요

> ## 🔒 프로젝트 분류: **Private**
> 개인 비즈니스 프로젝트다. 회사 등 외부에 노출되지 않으며, 공식(Official) 업무로 취급하지 않는다.
> 분류는 **업무의 성격**으로 판정한다(회사 공식 업무 = Official / 개인 비즈니스 = Private). 사용하는 클라우드는 판정 기준이 아니다. 이 프로젝트의 스택은 아래 "기술 스택" 참조.

**고앤슈트(gonsuit.com)** 는 마이크로 SaaS 및 AI 솔루션을 개발하는 기업의 공식 허브 사이트입니다.
단순 포트폴리오가 아닌, 자체 개발 상품의 **신뢰 허브 + 세일즈 채널** 역할을 수행합니다.

- **도메인**: `https://gonsuit.com` (Vercel 배포 / Cloudflare DNS)
- **브랜드 정체성**: "상상을 기술로 현실화하는, 비즈니스 가치 창출 기술 파트너"
- **핵심 목표**: 브랜드 신뢰도 구축 → 개발 상품 세일즈 → 글로벌 확장

---

## 현재 작업 상태 ⚠️ 세션 시작 시 먼저 확인

> **최종 갱신: 2026-08-26**
> 이 섹션은 **누적 로그가 아니라 스냅샷**이다. 항상 덮어쓰며, 지나간 이력은 남기지 않는다. (이력은 `git log` 참조)

**사이트 상태**: 출시·운영 중 (1차 런칭 완료 — 상세 기록은 `2_PDP.md` 아카이브)

**진행 중 작업**: 없음

**다음 할 일**
1. **WordTap Play Store 출시** → 출시 후 위 "개발 상품(앱) 현황" 표의 상태를 `운영중`으로, Play Store 링크·상세 페이지 JSON-LD의 `downloadUrl`/`installUrl` 갱신
2. **글소리 Play Store 평점 발생 확인** → 발생 시 `products/gulsori/page.tsx`의 `aggregateRating` 주석 해제 후 실제 값 입력
3. 신규 앱 추가 시 체크리스트: 상세 페이지 · 홈 카드(`page.tsx`) · `sitemap.ts` · `privacy/page.tsx` · 위 상품 표 **5곳 동시 갱신**

**최근 결정 사항**
- `/resources`(PDF 가이드 판매) 폐기 → `/lab` 308 리다이렉트로 대체
- 문서 계층을 SSOT 기준으로 분리 (아래 "문서 관리 체계" 참조)

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui (Zinc/Indigo 테마) |
| Font | Inter |
| Database | Supabase (PostgreSQL) |
| Email 발신 | Resend (`info@gonsuit.com`) |
| Email 수신 | Cloudflare Email Routing |
| 호스팅 | Vercel |
| DNS | Cloudflare |
| 통계 | Vercel Analytics + Google Analytics 4 (G-WF5QHV9GXV) |

---

## 디렉토리 구조

> 모든 경로는 **저장소 루트 기준 상대경로**로 표기한다. (절대경로 금지 — 작업 PC마다 드라이브·폴더명이 달라 크로스 머신에서 깨진다.)

```
./                             ← 저장소 루트 (문서 + 웹 프로젝트)
├── 1_PRD.md / 2_PDP.md / 3_LRP.md / CLAUDE.md
├── supabase_schema.sql
└── gonsuit/                   ← Next.js 프로젝트 루트
    ├── next.config.js         ← /resources → /lab 308 리다이렉트
    ├── public/images/         ← gulsori-icon.png, wordtap-icon.png, philosophy.png
    └── src/
        ├── app/
        │   ├── layout.tsx             ← 공통 레이아웃 (GA4, Vercel Analytics, Organization/WebSite JSON-LD)
        │   ├── page.tsx               ← 홈 (Hero / 개발 상품 카드 / Stories / Contact CTA)
        │   ├── about/page.tsx         ← 철학 및 로드맵
        │   ├── contact/page.tsx       ← 협업 문의 폼 (Supabase + Resend 연동)
        │   ├── lab/page.tsx           ← 기술 블로그 목록
        │   ├── lab/[slug]/page.tsx    ← 블로그 상세 (SSG)
        │   ├── products/gulsori/page.tsx  ← 글소리 앱 상세
        │   ├── products/wordtap/page.tsx  ← WordTap 앱 상세
        │   ├── privacy/page.tsx       ← 개인정보처리방침
        │   ├── sitemap.ts             ← 자동 sitemap.xml 생성
        │   ├── robots.ts              ← 자동 robots.txt 생성
        │   └── api/contact/route.ts   ← 문의 API Route
        ├── components/
        │   ├── Header.tsx        ← 공통 헤더 (네비게이션)
        │   ├── Footer.tsx        ← 공통 푸터
        │   └── AboutCta.tsx      ← About CTA 버튼 (클라이언트 컴포넌트)
        └── lib/
            ├── gtag.ts           ← GA4 이벤트 추적 유틸리티
            ├── supabase.ts       ← Supabase 클라이언트
            └── utils.ts          ← cn() 유틸 함수
```

---

## 페이지 구조

```
/                    → 비전 + 개발 상품 라인업 + 빌딩 스토리 + 협업 문의 CTA
/contact             → 협업 및 서비스 문의 폼
/lab                 → 기술 블로그 (AI·SaaS 인사이트)
/lab/[slug]          → 블로그 상세 (SSG)
/about               → 고앤슈트 철학, 팀, 로드맵
/privacy             → 개인정보처리방침
/products/gulsori    → 글소리 앱 상세
/products/wordtap    → WordTap 앱 상세
```

> `/resources` 페이지는 제거됨 (모든 항목 Coming soon 상태였음). `next.config.js`에서 `/resources → /lab` 308 리다이렉트 유지.

---

## 개발 상품(앱) 현황 ⚠️ 작업 전 확인

새 상품을 추가하거나 상태를 변경할 때, 아래 표와 각 상세 페이지(`src/app/products/*/page.tsx`)·홈 카드(`src/app/page.tsx`)·`sitemap.ts`·`privacy/page.tsx`를 함께 갱신한다.

| 앱 | 상태 | 패키지 ID | Play Store | 상세 페이지 | 아이콘 |
|---|---|---|---|---|---|
| **글소리** (큰글씨 TTS 텍스트 리더) | **운영중** (2026 정식 출시) | `com.gonsuit.geulsori` | [링크](https://play.google.com/store/apps/details?id=com.gonsuit.geulsori) | `/products/gulsori` | `/images/gulsori-icon.png` |
| **WordTap** (AI 문법 해설 영어 학습) | 출시예정 | `com.gonsuit.wordtap` | — | `/products/wordtap` | `/images/wordtap-icon.png` |
| **Trend Scouter** | 운영중 | (웹 SaaS) | — | `https://trend.gonsuit.com` (외부) | 아이콘(lucide) |

**상태 배지 색상 규칙** (홈 카드 + 상세 Hero 공통):
- `운영중` → `bg-emerald-100 text-emerald-700`
- `출시예정` → `bg-amber-100`(글소리류) / `bg-blue-100`(WordTap류)
- `준비중` → `bg-zinc-100 text-zinc-600`

**글소리 실제 출시 기능** (Play Store 등록 기준 — 상세 페이지와 일치 유지):
TXT·**EPUB** 파일 읽기 / TTS **백그라운드 재생**(앱 닫아도 재생) / **한글 인코딩 자동 감지(UTF-8·EUC-KR)** / 큰 글씨 5단계(16~32px) / 배경 테마 3종 / 위치 자동 저장 + 수동 책갈피 / AdMob 배너.
**앱 소스 위치** (이 저장소 **외부**, 저장소 루트 기준 상대경로 — 같은 작업 폴더 아래 형제 디렉토리):

| 앱 | 소스 경로 | 비고 |
|---|---|---|
| 글소리 | `../260604_textreader/textreader/` | `../260604_textreader/설명.txt` = Play Store 등록 문구 |
| WordTap | `../260813_wordtap/source/WordTap/` | Groq AI API 사용 → privacy 6·7조에 국외 이전 고지 반영됨 |

> 형제 폴더가 없는 PC에서는 위 경로가 존재하지 않을 수 있다. 그 경우 앱 소스 확인이 필요한 작업은 보류하고 사용자에게 위치를 확인한다.

### 앱 상세 페이지 JSON-LD — 평점 스키마 정책 ⚠️ 중요

- 앱 상세는 `SoftwareApplication` JSON-LD를 포함하고, 출시된 앱은 `downloadUrl`·`installUrl`에 Play Store URL을 넣는다.
- **`aggregateRating`(별점)은 Google Play에 실제 평점이 표시된 뒤에만 추가한다.** 데이터 없이 임의·허위 값을 넣으면 Google 구조화 데이터 정책 위반 → 리치 결과 거부 및 수동 조치(패널티) 대상.
- 글소리 `page.tsx`에는 평점 발생 시 주석만 해제하면 되도록 `aggregateRating` 템플릿을 주석으로 준비해 둠. 실제 평점 확인 후 `ratingValue`·`ratingCount`를 실제 값으로 채운다.

---

## 환경변수

```env
NEXT_PUBLIC_SUPABASE_URL      # Supabase 프로젝트 URL
NEXT_PUBLIC_SUPABASE_ANON_KEY # Supabase anon public key
RESEND_API_KEY                # Resend API 키 (re_로 시작)
```

> Vercel 대시보드 → Settings → Environment Variables 에서 관리.
> `.env` 파일은 절대 커밋하지 않는다.

---

## GA4 이벤트 추적 규칙 ⚠️ 필수

**주요 링크 및 버튼에는 반드시 GA4 클릭 이벤트를 추가해야 합니다.**

### 유틸리티 위치
```
src/lib/gtag.ts
```

### 현재 정의된 추적 함수

```typescript
import { trackMenuClick }     from "@/lib/gtag"; // 헤더/푸터 메뉴 클릭
import { trackProductClick }  from "@/lib/gtag"; // 개발 상품 카드 클릭
import { trackContactSubmit } from "@/lib/gtag"; // 문의 폼 제출 성공
```

### 새 추적 이벤트 추가 방법

`src/lib/gtag.ts` 에 함수를 추가한 후 컴포넌트에서 `onClick` 에 연결한다.

```typescript
// gtag.ts에 추가
export const trackCtaClick = (buttonName: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      button_name: buttonName,
      location: location,
    });
  }
};

// 컴포넌트에서 사용
<Link href="/contact" onClick={() => trackCtaClick("협업 문의하기", "hero")}>
  협업 문의하기
</Link>
```

### 추적 대상 링크 기준

아래에 해당하는 링크/버튼은 **모두** GA4 이벤트를 붙인다:

| 대상 | 이벤트명 | 필수 파라미터 |
|---|---|---|
| 헤더 네비게이션 메뉴 | `menu_click` | `menu_name` |
| 푸터 네비게이션 메뉴 | `menu_click` | `menu_name` |
| 개발 상품 카드 | `product_click` | `product_name`, `product_status` |
| Hero / Contact CTA 버튼 | `cta_click` | `button_name`, `location` |
| 외부 링크 (SNS, GitHub 등) | `external_link_click` | `link_name`, `url` |
| 문의 폼 제출 성공 | `contact_submit` | `contact_category` |
| PDF/리소스 다운로드 | `resource_click` | `resource_name` |

### GA4 확인 방법
- **실시간 확인**: [analytics.google.com](https://analytics.google.com) → 보고서 → 실시간
- **이벤트 조회**: 보고서 → 참여 → 이벤트
- **측정 ID**: `G-WF5QHV9GXV`

---

## SEO / AEO 규칙 ⚠️ 필수

새 페이지를 추가하거나 기존 페이지를 수정할 때 아래 규칙을 **반드시** 준수한다.

### 1. 페이지별 메타데이터 필수 항목

모든 페이지(`page.tsx`)에는 아래 항목을 포함한 `metadata` 를 export 해야 한다.

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지 제목 — 고앤슈트",       // 50~60자 이내
  description: "페이지 설명",            // 120~160자 이내, 핵심 키워드 포함
  alternates: {
    canonical: "https://gonsuit.com/페이지경로", // 중복 URL 방지
  },
  openGraph: {
    title: "페이지 제목",
    description: "페이지 설명",
    url: "https://gonsuit.com/페이지경로",
    type: "website",                     // 블로그 포스트는 "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "페이지 제목",
    description: "페이지 설명",
  },
};
```

> `layout.tsx`의 `title.template: "%s | 고앤슈트"` 가 자동 적용되므로
> 각 페이지의 `title`은 페이지 고유 이름만 작성해도 된다. (예: `"About — 고앤슈트 소개"`)

---

### 2. 구조화 데이터 (JSON-LD / Schema.org) — AEO 핵심

AI 검색 엔진(ChatGPT, Perplexity, Google SGE 등)이 콘텐츠를 정확히 이해하도록 구조화 데이터를 추가한다.

| 페이지 유형 | 적용할 Schema 타입 |
|---|---|
| 홈 (`/`) | `Organization` + `WebSite` ← layout.tsx에 적용 완료 |
| 블로그 포스트 (`/lab/[slug]`) | `Article` + `BreadcrumbList` |
| 앱 상세 (`/products/[app]`) | `SoftwareApplication` (평점 정책은 위 "개발 상품(앱) 현황" 참조) |
| FAQ 섹션 | `FAQPage` |
| 회사 소개 (`/about`) | `AboutPage` + `Organization` |

**블로그 포스트 JSON-LD 예시:**
```typescript
// /lab/[slug]/page.tsx
<Script id="json-ld-article" type="application/ld+json" strategy="beforeInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "고앤슈트" },
    publisher: { "@id": "https://gonsuit.com/#organization" },
    datePublished: post.date,
    url: `https://gonsuit.com/lab/${post.slug}`,
  })}
</Script>
```

---

### 3. AEO (Answer Engine Optimization) 작성 원칙

AI 검색 엔진이 답변 소스로 활용할 수 있도록 콘텐츠를 작성한다.

- **직접적인 답변 우선**: 질문에 대한 답을 첫 문장에 명확히 제시한다.
- **정의형 문장 사용**: "고앤슈트는 ~하는 기업입니다" 형식으로 엔티티를 명확히 정의한다.
- **FAQ 구조 활용**: 자주 묻는 질문은 `<details>/<summary>` 또는 명시적 Q&A 포맷으로 작성하고 `FAQPage` 스키마를 추가한다.
- **숫자와 사실 포함**: "2주 내 MVP 개발", "99개 트렌드 분석" 등 구체적 수치를 명시한다.
- **내부 링크 연결**: 관련 페이지를 텍스트 앵커로 연결해 엔티티 관계를 명확히 한다.

---

### 4. sitemap / robots

- `src/app/sitemap.ts` — 새 페이지 추가 시 반드시 sitemap에 URL 항목을 추가한다.
- `src/app/robots.ts` — API 경로(`/api/*`)는 크롤링 차단 유지.
- 생성 결과 확인: `https://gonsuit.com/sitemap.xml`, `https://gonsuit.com/robots.txt`

---

### 5. 이미지 SEO

- 모든 `<Image>` 컴포넌트에 `alt` 속성 필수 (키워드 포함, 설명적으로 작성).
- OG 이미지는 `1200×630px` 권장. `/public/images/og-*.png` 에 저장.
- 이미지 파일명은 영문 소문자 + 하이픈 사용 (예: `og-home.png`, `philosophy.png`).

---

### 6. SEO 체크리스트 (페이지 추가/수정 시 확인)

```
□ title 50~60자 이내, 핵심 키워드 포함
□ description 120~160자 이내
□ canonical URL 설정
□ OG 태그 (title, description, url, type)
□ Twitter Card 태그
□ 해당 페이지 JSON-LD 스키마 추가
□ sitemap.ts 에 URL 추가
□ 모든 이미지에 alt 속성
□ h1 태그 페이지당 1개만 사용
□ 내부 링크 최소 1개 이상 연결
```

---

## 코딩 컨벤션

- **컴포넌트**: PascalCase, `"use client"` 는 상호작용이 필요한 컴포넌트에만 사용
- **스타일**: Tailwind CSS 유틸리티 클래스 사용, 인라인 style 금지
- **색상**: shadcn 토큰(`text-foreground`, `bg-primary` 등) 우선 사용, 하드코딩 금지
- **아이콘**: `lucide-react` 패키지만 사용
- **링크**: 내부 링크는 `next/link`, 외부 링크는 `target="_blank" rel="noopener noreferrer"` 필수
- **서버/클라이언트**: App Router 기본은 Server Component, `onClick` 등 이벤트가 필요한 경우에만 `"use client"` 선언

---

## 배포 프로세스

```
로컬 개발 → git push origin main → Vercel 자동 배포 → gonsuit.com 반영
```

- `main` 브랜치 푸시 시 Vercel이 자동으로 빌드 및 배포
- 배포 상태: [vercel.com/gonsuit/gonsuit](https://vercel.com/gonsuit/gonsuit)
- 빌드 전 로컬에서 `npm run build` 로 오류 확인 권장

---

## Git 커밋 규칙 ⚠️ 중요

**Claude는 절대 git commit 및 git push를 직접 실행하지 않는다.**

### 배경
Vercel Hobby 플랜 + Private 레포 환경에서 Claude가 커밋을 실행하면,
커밋 작성자가 프로젝트 소유자와 다른 계정으로 인식되어 Vercel 배포가 차단된다.

> "The deployment was blocked because the commit author did not have contributing access to the project on Vercel."

### 규칙
- 코드 수정 작업 완료 후 **커밋 메시지 초안만 제안**한다.
- 실제 `git add`, `git commit`, `git push` 는 **사용자가 직접 실행**한다.
- 빌드 검증(`npm run build`)은 Claude가 실행해도 무방하다.

### 커밋 메시지 제안 형식
작업 완료 후 아래 형식으로 커밋 메시지를 제안한다:
```
feat: 기능 추가 내용 요약

- 변경 파일 1: 설명
- 변경 파일 2: 설명
```

---

## 문서 관리 체계 ⚠️ 필수

작업 컴퓨터가 바뀌어도 AI가 항상 참고할 수 있도록, **모든 기준 문서는 git으로 추적되는 저장소 파일**로 관리한다. (로컬 `.claude/memory`는 해당 PC에만 존재하므로 크로스 머신 기준이 될 수 없다.)

**계층 구조 — 한 사실은 한 곳에만 (SSOT):**

| 문서 | 역할 | 소유하는 정보 | 성격 |
|---|---|---|---|
| **CLAUDE.md** (이 문서) | **운영 단일 진실원 + 허브**. AI가 매 세션 자동 로드 | 기술 스택, 디렉토리 구조, 페이지 구조, **개발 상품 현황**, GA4/SEO 규칙, 코딩 컨벤션, 커밋 규칙 = **현재값** | 현재형·간결·실행지향 |
| `1_PRD.md` | 제품 요구사항 정의서 | 제품이 **왜/무엇** — 정체성, 포지셔닝, 요구사항, 수익 방향 | 방향성(durable) |
| `3_LRP.md` | 장기 로드맵 | 장기 전략·비전 (Phase 1~3) | 비전 |
| `2_PDP.md` | 개발 계획서 (4주 런칭) | ✅ **1차 런칭 완료 — 아카이브(동결)**. 이후 작업은 CLAUDE.md가 관리 | 과거 기록 |

**규칙:**
- **"현재값"(스택·구조·상품 상태·규칙)은 CLAUDE.md만 소유한다.** PRD/LRP는 이를 반복하지 말고 "현재 구현은 CLAUDE.md 참조"로 링크한다. (중복 = 드리프트의 원인)
- 페이지·상품·상태를 바꾸면 **CLAUDE.md를 먼저 갱신**한다. PRD/LRP는 "왜/방향"이 바뀔 때만 손댄다.
- 완료된 계획 문서(2_PDP)는 살아있는 척 두지 말고 상단에 완료 표기 후 동결한다.
- **갱신 트리거**: 작업 완료 후 커밋 메시지를 제안할 때, CLAUDE.md 상단 **"현재 작업 상태"**(최종 갱신일·다음 할 일)와 변경된 현재값(페이지·상품 표)을 **같은 커밋에 함께 포함**한다. "나중에 정리"는 반드시 누락된다.
- **"현재 작업 상태"는 스냅샷이다.** 완료된 항목은 지우고 덮어쓴다. 이력을 쌓지 않는다 — 이력은 `git log`가 이미 갖고 있고, 중복은 곧 드리프트다.

**경로 표기 규칙 ⚠️ (크로스 머신 필수):**
- 모든 문서의 경로는 **저장소 루트 기준 상대경로**로만 적는다. `D:\...`, `E:\...` 같은 절대경로 **금지** — 작업 PC마다 드라이브·폴더명이 달라 그대로 깨진다.
  - 저장소 내부: `gonsuit/src/app/page.tsx`
  - 저장소 외부(형제 프로젝트): `../260604_textreader/textreader/`
- 외부 경로를 적을 때는 **그 PC에 없을 수 있음**을 함께 표기하고, 없으면 사용자에게 위치를 확인한다.

---

## 참조 문서

- `1_PRD.md` — 제품 요구사항 정의서 (왜/무엇)
- `2_PDP.md` — 개발 계획서 (1차 런칭 완료, 아카이브)
- `3_LRP.md` — 장기 로드맵 (전략/비전)
