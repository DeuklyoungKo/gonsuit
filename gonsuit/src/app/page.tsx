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
} from "lucide-react";

// ── 서비스 데이터 ──────────────────────────────────────────
const services = [
  {
    name: "Trend Scouter",
    description:
      "전 세계 비즈니스 트렌드를 실시간 수집·분석하여 한국 창업가에게 즉시 실행 가능한 기회 리포트를 제공합니다.",
    status: "운영중",
    statusColor: "bg-emerald-100 text-emerald-700",
    href: "https://trendscouter.gonsuit.com",
    icon: TrendingUp,
    tags: ["AI 분석", "트렌드", "SaaS"],
  },
  {
    name: "AI News",
    description:
      "AI·테크 업계 주요 뉴스를 매일 큐레이션하고 한국 창업가 관점의 인사이트를 자동으로 생성합니다.",
    status: "베타",
    statusColor: "bg-indigo-100 text-indigo-700",
    href: "/ai-news",
    icon: Newspaper,
    tags: ["AI", "뉴스", "큐레이션"],
  },
  {
    name: "Coming Soon",
    description:
      "다음 마이크로 SaaS 아이디어를 Trend Scouter로 검증 중입니다. 뉴스레터를 구독하면 가장 먼저 알려드립니다.",
    status: "준비중",
    statusColor: "bg-zinc-100 text-zinc-500",
    href: "#newsletter",
    icon: Zap,
    tags: ["예정"],
  },
];

// ── 빌딩 스토리 데이터 ─────────────────────────────────────
const stories = [
  {
    date: "2026.03.09",
    title: "gonsuit.com 허브 사이트 오픈",
    desc: "마이크로 SaaS들의 신뢰 허브를 구축했습니다. Build in Public으로 모든 과정을 공개합니다.",
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
            <span className="text-lg font-bold tracking-tight">gonsuit</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "서비스", href: "#services" },
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

          <Link
            href="#newsletter"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:flex"
          >
            <Mail className="h-4 w-4" />
            뉴스레터 구독
          </Link>
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
              글로벌 트렌드를
              <br />
              <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                한국 기회
              </span>
              로 번역합니다
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              1인 창업가를 위한 마이크로 SaaS 허브. 빠른 MVP 출시 →
              데이터 기반 수익성 판단 → 자원 집중의 사이클로
              <br className="hidden md:block" />
              여러 서비스를 동시에 운영합니다.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#services"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                서비스 둘러보기
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#newsletter"
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                뉴스레터 구독
                <Mail className="h-4 w-4" />
              </Link>
            </div>

            {/* 지표 */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { value: "2+", label: "운영 중인 서비스" },
                { value: "99개", label: "분석된 트렌드" },
                { value: "4주", label: "MVP → 런칭" },
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
              <h2 className="text-3xl font-bold tracking-tight">운영 중인 서비스</h2>
              <p className="mt-3 text-muted-foreground">
                각 서비스는 독립적으로 수익성을 검증합니다
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

        {/* ── Building Stories ────────────────────────────── */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">빌딩 스토리</h2>
                <p className="mt-3 text-muted-foreground">모든 과정을 투명하게 공개합니다</p>
              </div>
              <Link
                href="/lab"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                전체 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {stories.map((story, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="w-28 shrink-0">
                    <span className="text-xs text-muted-foreground">{story.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{story.title}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${story.tagColor}`}>
                        {story.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{story.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Resources ────────────────────────────────────── */}
        <section id="resources" className="border-b border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
              <p className="mt-3 text-muted-foreground">
                마이크로 SaaS 창업에 필요한 실전 가이드
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
                      출시 예정
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
                      곧 출시
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter ───────────────────────────────────── */}
        <section id="newsletter" className="border-b border-border py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              빌딩 인사이트를 받아보세요
            </h2>
            <p className="mt-4 text-muted-foreground">
              새로운 서비스 출시, 수익 지표 공개, 바이브코딩 팁을
              <br />
              가장 먼저 이메일로 전달해 드립니다.
            </p>

            <form className="mx-auto mt-8 flex max-w-md gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                구독하기
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              스팸 없음. 언제든지 구독 취소 가능.
            </p>
          </div>
        </section>

        {/* ── AI News Preview ──────────────────────────────── */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                  <Newspaper className="h-3 w-3" /> Beta
                </div>
                <h2 className="text-2xl font-bold">AI News 큐레이션</h2>
                <p className="mt-2 max-w-lg text-muted-foreground">
                  매일 AI·테크 뉴스를 수집하고 "한국 창업가에게 왜 중요한가"
                  인사이트를 자동 생성합니다.
                </p>
              </div>
              <Link
                href="/ai-news"
                className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                <ExternalLink className="h-4 w-4" />
                뉴스 보기 (Beta)
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <Zap className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold">gonsuit</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">Micro SaaS Hub</span>
            </div>

            <nav className="flex gap-6 text-sm text-muted-foreground">
              {["서비스", "Lab", "Resources", "About", "개인정보처리방침"].map((item) => (
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
            © 2026 gonsuit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
