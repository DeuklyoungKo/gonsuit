# CLAUDE.md — 고앤슈트 (Go & Suit) 프로젝트 가이드

## 프로젝트 개요

**고앤슈트(gonsuit.com)** 는 마이크로 SaaS 및 AI 솔루션을 개발하는 기업의 공식 허브 사이트입니다.
단순 포트폴리오가 아닌, 자체 개발 상품의 **신뢰 허브 + 세일즈 채널** 역할을 수행합니다.

- **도메인**: `https://gonsuit.com` (Vercel 배포 / Cloudflare DNS)
- **브랜드 정체성**: "상상을 기술로 현실화하는, 비즈니스 가치 창출 기술 파트너"
- **핵심 목표**: 브랜드 신뢰도 구축 → 개발 상품 세일즈 → 글로벌 확장

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

```
gonsuit/                  ← Next.js 프로젝트 루트
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← 공통 레이아웃 (GA4 스크립트, Vercel Analytics 포함)
│   │   ├── page.tsx          ← 홈페이지 (Hero / Services / Stories / Resources / Contact)
│   │   ├── about/page.tsx    ← 철학 및 로드맵
│   │   ├── contact/page.tsx  ← 협업 문의 폼 (Supabase + Resend 연동)
│   │   ├── lab/page.tsx      ← 기술 블로그
│   │   ├── resources/page.tsx← PDF 가이드 상품
│   │   ├── privacy/page.tsx  ← 개인정보처리방침
│   │   ├── sitemap.ts        ← 자동 sitemap.xml 생성
│   │   ├── robots.ts         ← 자동 robots.txt 생성
│   │   └── api/contact/      ← 문의 API Route
│   ├── components/
│   │   ├── Header.tsx        ← 공통 헤더 (네비게이션)
│   │   ├── Footer.tsx        ← 공통 푸터
│   │   └── AboutCta.tsx      ← About CTA 버튼 (클라이언트 컴포넌트)
│   └── lib/
│       ├── gtag.ts           ← GA4 이벤트 추적 유틸리티
│       ├── supabase.ts       ← Supabase 클라이언트
│       └── utils.ts          ← cn() 유틸 함수
```

---

## 페이지 구조

```
/            → 비전 + 개발 상품 라인업 + 빌딩 스토리 + 협업 문의 CTA
/contact     → 협업 및 서비스 문의 폼
/lab         → 기술 블로그 (AI·SaaS 인사이트)
/resources   → PDF 가이드 상품 카드
/about       → 고앤슈트 철학, 팀, 로드맵
/privacy     → 개인정보처리방침
```

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
| 상품/서비스 (`/resources`) | `Product` 또는 `Offer` |
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

## 참조 문서

- `1_PRD.md` — 제품 요구사항 정의서
- `2_PDP.md` — 개발 계획서
- `3_LRP.md` — 장기 로드맵
