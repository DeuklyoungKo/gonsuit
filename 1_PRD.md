# PRD (Product Requirement Document) - 고앤슈트 (Go & Suit)

## 1. 프로젝트 개요 및 목표
고앤슈트(Go & Suit)는 고객의 상상을 현실로 만드는 기술력 기반의 **마이크로 SaaS 및 AI 솔루션 개발 전문 기업**의 사이트입니다. 단순한 포트폴리오를 넘어, 고앤슈트가 개발한 상품들의 신뢰 허브 역할을 수행하며 비즈니스 솔루션을 제안합니다.

- **핵심 목표**: 기업 브랜드 신뢰도 구축 + 개발 상품(Trend Scouter 등) 소개 및 세일즈 + 글로벌 확장성 확보.
- **정체성**: "상상을 기술로 현실화하는, 비즈니스 가치 창출 기술 파트너"
- **운영 원칙**: 국내 고객 중심의 신뢰도 확보 → 영문 대응을 통한 글로벌 확장 준비 → 고도화된 솔루션 제안.

## 1.1 글로벌 대응 전략 (i18n)
- **전략**: Bilingual(국문/영문) 구조 채택.
- **실행**: 국문 사이트를 기본으로 구축하되, 글로벌 파트너 및 고객을 위해 핵심 영역(Header, Hero, Product Info)의 En/Kr 전환 기능을 제공.

---

## 2. 전략적 포지셔닝 및 차별화

기존 포트폴리오 사이트 또는 링크 허브 사이트와의 차별화를 위해 다음 전략을 채택합니다.

- **전문적인 브랜드 이미지**: 외형은 세련된 기업 브랜드 사이트, 내용은 실질적인 기술력과 상품 라인업으로 구성.
- **Bilingual 확장성**: 국내외 고객 모두에게 대응 가능한 유연한 다국어 구조.
- **상품 중심 콘텐츠**: 뉴스나 단순 블로그보다 "우리가 무엇을 만들고 어떤 가치를 주는가"에 집중.

---

## 3. 핵심 콘텐츠 및 기능 구성

### 페이지 구조
```
고앤슈트 (go-suit.com)
├── /            → 비전 + 주요 개발 상품 라인업 + 협업 문의 (Build in Public)
├── /contact     → 협업 및 서비스 문의 (Supabase + Resend 연동)
├── /products    → 개발 상품 상세 목록 (상태: 운영/준비중)
├── /lab         → 기술 블로그 (고앤슈트의 기술 인사이트)
├── /about       → 고앤슈트의 철학, 팀, 로드맵
└── /privacy     → 공용 개인정보처리방침
```

### 홈페이지 구성 섹션 (구현 완료)
| 섹션 | 내용 |
|------|------|
| Hero | 슬로건 + 핵심 지표(서비스 수, 분석 트렌드 수, MVP 기간) + CTA 버튼 2개 |
| Services | 운영 중인 서비스 카드 (상태 뱃지: 운영중 / 베타 / 준비중) |
| Building Stories | Build in Public 타임라인 (날짜 · 제목 · 태그 · 설명) |
| Resources | PDF 가이드 상품 카드 (가격 · 출시 예정 뱃지) |
| Newsletter | 이메일 구독 폼 |
| AI News Preview | Beta 배너 + 뉴스 페이지 링크 |

### 자체 수익 채널
1. **PDF 가이드 판매**: "0원으로 마이크로 SaaS 만드는 법" 등 실전 가이드 (단건 $5~$15)
2. **뉴스레터 구독**: 무료 구독 → 프리미엄 전환 (추후)
3. **AI 뉴스 서비스**: Beta 운영 후 별도 서비스 분리 및 수익화

### AI 뉴스 기능 분리 기준 (사전 정의)
| 지표 | 현재 | 분리 기준 |
|------|------|-----------|
| 월 방문자 | - | 1,000명 이상 |
| 뉴스레터 구독 | 0명 | 100명 이상 |
| 평균 체류 시간 | - | 2분 이상 |

위 지표 중 2개 이상 충족 시 별도 서비스(`ainews.gonsuit.com` 또는 독립 도메인)로 분리.

---

## 4. 수익화 및 성장 전략

- **단기**: PDF 가이드 Gumroad 연동 → 수동 결제로 즉시 수익 검증
- **중기**: 뉴스레터 구독자 축적 → 프리미엄 구독 전환 테스트
- **장기**: AI 뉴스 서비스 분리 + 멘토링/컨설팅 패키지 도입

### 리텐션 전략
- 정기적인 빌딩 스토리 업데이트로 재방문 유도
- 뉴스레터로 커뮤니티 기능 대체 (초기 커뮤니티 게시판 미도입)
- 커뮤니티 도입은 뉴스레터 구독자 300명 달성 후 재검토

---

## 5. 서버 구성도

```mermaid
flowchart TD
    User([사용자]) <--> Frontend[Next.js Frontend]
    Frontend <--> Supabase[(Supabase DB/Auth)]

    subgraph "콘텐츠 & 수익"
        Resources[PDF 가이드] --> Gumroad[Gumroad / 자체결제]
        Newsletter[뉴스레터 구독폼] --> Supabase
    end

    subgraph "AI 뉴스 (Beta)"
        NewsScraper[뉴스 스크래퍼] --> Supabase
        NewsScraper <--> AIEngine[AI 요약 엔진]
    end

    subgraph "서비스 및 알림"
        Frontend --> TrendScouter[Trend Scouter]
        Frontend --> Resend[Resend Email API]
        Resend --> AdminEmail["info@gonsuit.com"]
        Frontend --> FutureService[향후 서비스들...]
    end
```

### 기술 아키텍처 (Technical Stack)
- **Frontend**: Next.js 14 (App Router) + Tailwind CSS (Vercel 호스팅)
- **Backend**: Vercel Serverless Functions (API Route)
- **UI 컴포넌트**: shadcn/ui (Radix UI 기반)
- **Database/Auth**: Supabase (PostgreSQL & GoTrue)
- **Email Service**: 
    - **발신**: Resend (info@gonsuit.com 알림 발송용)
    - **수신/포워딩**: Cloudflare Email Routing (info@gonsuit.com -> 개인 메일)
- **AI 뉴스 엔진**: Gemini API / Claude API (요약 및 인사이트 자동화)
- **결제**: Gumroad (초기) → Stripe / PortOne (수익 검증 후)

### UI 디자인 시스템
shadcn/ui `https://ui.shadcn.com/create?preset=ac8UbVQ` 기준으로 적용.

| 항목 | 선택값 | 비고 |
|------|--------|------|
| Style | Maia | 미니멀·모던 레이아웃 |
| Base Color | Zinc | 세련된 그레이톤, 테크 느낌 |
| Theme | Indigo | 신뢰감·전문성, AI/테크 서비스 최적 |
| Font | Inter | 가독성 최고, 테크 스타트업 표준 |
| Radius | 0.625rem | 부드러운 모서리 |

### 프로젝트 디렉토리 구조
```
gonsuit/                        ← 웹루트 (E:\Work_Gon\260309_gonsuit\gonsuit)
├── src/
│   ├── app/
│   │   ├── globals.css         ← shadcn CSS 변수 (Light / Dark 모드)
│   │   ├── layout.tsx          ← Inter 폰트 + 공통 메타데이터
│   │   └── page.tsx            ← 홈페이지 (6개 섹션 구현)
│   ├── components/
│   │   └── ui/                 ← shadcn 컴포넌트 추가 위치
│   └── lib/
│       └── utils.ts            ← cn() 유틸 함수
├── public/                     ← 정적 에셋
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

*참조 및 연동: [2.PDP.md](./2_PDP.md)*
