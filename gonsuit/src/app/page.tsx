import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Globe,
  BookOpen,
  Newspaper,
  Mail,
  ExternalLink,
  Github,
  Twitter,
  ChevronRight,
  Languages,
} from "lucide-react";

// ── 서비스 데이터 ──────────────────────────────────────────
const services = [
  {
    name: "Trend Scouter",
    description:
      "글로벌 비즈니스 트렌드를 실시간 수집·분석하여 한국 시장에 최적화된 기회 리포트를 제공합니다.",
    status: "운영중",
    statusColor: "bg-emerald-100 text-emerald-700",
    href: "https://trendscouter.go-suit.com",
    icon: TrendingUp,
    tags: ["트렌드 분석", "AI 인사이트", "SaaS"],
  },
  {
    name: "AI News Engine",
    description:
      "대규모 언어 모델을 활용하여 방대한 테크 뉴스를 실시간 요약하고 비즈니스 인사이트를 도출합니다.",
    status: "Beta",
    statusColor: "bg-indigo-100 text-indigo-700",
    href: "#",
    icon: Newspaper,
    tags: ["AI 요약", "비즈니스 지능", "자동화"],
  },
  {
    name: "Custom SaaS Builder",
    description:
      "고객의 아이디어를 빠르게 수익화할 수 있는 맞춤형 마이크로 SaaS 및 웹 솔루션을 개발합니다.",
    status: "상담가능",
    statusColor: "bg-amber-100 text-amber-700",
    href: "#",
    icon: Zap,
    tags: ["맞춤형 개발", "Fast MVP", "자동화"],
  },
];

// ── 빌딩 스토리 데이터 ─────────────────────────────────────
const stories = [
  {
    date: "2026.03.09",
    title: "고앤슈트 (Go & Suit) 메인 허브 오픈",
    desc: "상상을 현실로 만드는 기술력의 산실, 고앤슈트 공식 허브를 구축했습니다.",
    tag: "론칭",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    date: "2026.03.01",
    title: "Trend Scouter — 99개 트렌드 분석 완료",
    desc: "Reddit, Product Hunt, Indie Hackers에서 수집한 99개 트렌드 전수 분석 및 한국형 GTM 전략 자동 생성.",
    tag: "마일스톤",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    date: "2026.02.20",
    title: "AI 분석 파이프라인 구축",
    desc: "Gemini API 연동으로 수익성·난이도·한국 적합도 스코어링을 완전 자동화했습니다.",
    tag: "개발",
    tagColor: "bg-amber-100 text-amber-700",
  },
];

// ── 리소스 데이터 ──────────────────────────────────────────
const resources = [
  {
    title: "0원으로 마이크로 SaaS 만드는 법",
    desc: "Vercel, Supabase, Cloudflare Workers로 완전 무료 인프라를 구축하는 실전 가이드",
    price: "$9",
    badge: "PDF 가이드",
    badgeColor: "bg-indigo-100 text-indigo-700",
    comingSoon: true,
  },
  {
    title: "바이브코딩 스타터킷",
    desc: "AI와 함께 하루 만에 MVP를 만드는 프롬프트 모음 + 실전 워크플로우",
    price: "$5",
    badge: "템플릿",
    badgeColor: "bg-violet-100 text-violet-700",
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Navigation ─────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">고앤슈트</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "개발 상품", href: "#services" },
              { label: "Lab", href: "/lab" },
              { label: "Resources", href: "#resources" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted md:flex">
              <Languages className="h-4 w-4" />
              <span>KR / EN</span>
            </button>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              문의하기
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border">
          {/* 배경 그라디언트 */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Globe className="h-3.5 w-3.5" />
              Build in Public · 마이크로 SaaS 허브
            </div>

            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              상상을 현실로 만드는
              <br />
              <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                기술의 가치
              </span>
              , 고앤슈트
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              고객의 니즈에 맞춘 최적화된 마이크로 SaaS 및 AI 솔루션을 개발합니다.
              <br className="hidden md:block" />
              우리는 단순한 코딩을 넘어 비즈니스 가치를 창출하는 상품을 제안합니다.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                개발 상품 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                협업 문의하기
                <Mail className="h-4 w-4" />
              </Link>
            </div>

            {/* 지표 */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { value: "5+", label: "개발 완료 상품" },
                { value: "100%", label: "고객 만족도" },
                { value: "2주", label: "MVP 제작 기간" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ────────────────────────────────────── */}
        <section id="services" className="border-b border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">고앤슈트 개발 상품</h2>
              <p className="mt-3 text-muted-foreground">
                비즈니스 가치를 극대화하는 최적화된 솔루션 라인업
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((svc) => (
                <Link
                  key={svc.name}
                  href={svc.href}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${svc.statusColor}`}>
                      {svc.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold">{svc.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {svc.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    바로가기 <ChevronRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Building Stories (주석 처리) ──────────────────────
        <section className="border-b border-border py-20">
          ...
        </section>
        ── */}

        {/* ── Resources ────────────────────────────────────── */}
        <section id="resources" className="border-b border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Technical Assets</h2>
              <p className="mt-3 text-muted-foreground">
                고앤슈트의 기술 노하우가 담긴 실전 개발 가이드
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((res, i) => (
                <div
                  key={i}
                  className="relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  {res.comingSoon && (
                    <div className="absolute right-4 top-4 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500">
                      준비중
                    </div>
                  )}
                  <span className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${res.badgeColor}`}>
                    {res.badge}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{res.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{res.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{res.price}</span>
                    <button
                      disabled
                      className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary opacity-60"
                    >
                      <BookOpen className="h-4 w-4" />
                      문의하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Section ────────────────────────────────── */}
        <section id="contact" className="border-b border-border py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-8 text-4xl font-bold tracking-tight">
              함께 혁신을 만들어갈 파트너를 찾습니다
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              고앤슈트의 개발 상품 도입 문의나 맞춤형 솔루션 개발 협업이 필요하신가요?
              <br />
              전문 팀이 귀하의 비즈니스에 최적화된 기술 제안을 드립니다.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="mailto:contact@go-suit.com"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:opacity-95 sm:w-auto"
              >
                상담 신청하기
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted sm:w-auto"
              >
                고앤슈트 소개서 보기
              </button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              평균 24시간 이내에 담당자가 답변해 드립니다.
            </p>
          </div>
        </section>

        {/* ── AI News Preview (주석 처리) ────────────────────────
        <section className="border-b border-border bg-muted/30 py-16">
          ...
        </section>
        ── */}
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <Zap className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold">고앤슈트</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">Business Tech Partner</span>
            </div>

            <nav className="flex gap-6 text-sm text-muted-foreground">
              {["개발 상품", "Lab", "Resources", "About", "개인정보처리방침"].map((item) => (
                <Link key={item} href="#" className="transition-colors hover:text-foreground">
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © 2026 고앤슈트. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
