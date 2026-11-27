import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Mail,
  Rocket,
  Zap,
  CheckCircle2,
  TrendingUp,
  Code2,
} from "lucide-react";
import AboutCta from "@/components/AboutCta";

export const metadata: Metadata = {
  title: "About — 고앤슈트 소개",
  description:
    "고앤슈트는 상상을 기술로 현실화하는 마이크로 SaaS · AI 솔루션 전문 기업입니다. 우리의 철학, 팀, 그리고 성장 로드맵을 소개합니다.",
  alternates: {
    canonical: "https://gonsuit.com/about",
  },
  openGraph: {
    title: "About — 고앤슈트 소개",
    description:
      "고앤슈트는 상상을 기술로 현실화하는 마이크로 SaaS · AI 솔루션 전문 기업입니다. 우리의 철학, 팀, 그리고 성장 로드맵을 소개합니다.",
    url: "https://gonsuit.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — 고앤슈트 소개",
    description:
      "고앤슈트는 상상을 기술로 현실화하는 마이크로 SaaS · AI 솔루션 전문 기업입니다. 우리의 철학, 팀, 그리고 성장 로드맵을 소개합니다.",
  },
};

const principles = [
  {
    icon: Zap,
    title: "Fast Iteration",
    desc: "2주 이내의 빠른 MVP 개발로 아이디어를 시장에서 즉시 검증합니다. 느린 완벽함보다 빠른 실행이 먼저입니다.",
  },
  {
    icon: Rocket,
    title: "Business First",
    desc: "기술적 화려함보다 비즈니스 임팩트와 수익화 가능성을 최우선으로 고려합니다.",
  },
  {
    icon: Globe,
    title: "Global Ready",
    desc: "처음부터 글로벌 시장 확장을 고려한 아키텍처와 다국어 기반을 설계합니다.",
  },
];



const roadmap = [
  {
    period: "2026 Q1",
    status: "done",
    title: "고앤슈트 창업 & Trend Scouter 론칭",
    desc: "AI 트렌드 분석 솔루션을 통해 시장의 니즈를 데이터로 파악하는 여정을 시작했습니다.",
  },
  {
    period: "2026 Q2",
    status: "current",
    title: "고앤슈트 브랜드 허브 오픈 & Intelligence 고도화",
    desc: "gonsuit.com 허브를 통해 정체성을 공고히 하고 트렌드 분석 시스템을 더욱 정교화합니다.",
  },
  {
    period: "2026 Q3",
    status: "upcoming",
    title: "자동 바이럴 영상 및 SNS 홍보 엔진 개발",
    desc: "쇼츠 자동 제작 및 SNS 자동 배포 시스템을 통해 고앤슈트 서비스의 확산을 자동화합니다.",
  },
  {
    period: "2026 Q4",
    status: "upcoming",
    title: "사이트 진단 및 피드백 정리 시스템 구축",
    desc: "비즈니스 최적화를 위한 진단 도구와 고객 반응 분석 자동화 솔루션을 통합 전용 대시보드로 제공합니다.",
  },
  {
    period: "2027~",
    status: "upcoming",
    title: "Global SaaS Expansion & B2B Open",
    desc: "검증된 자동화 솔루션들을 글로벌 SaaS로 서비스화하고 B2B 파트너들에게 API 및 솔루션을 개방합니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* ── Hero ───────────────────────────────────────── */}
        {/* 게이트 29: 떠 있는 블러 구체와 그라디언트 워시를 걷어내고
            Coral의 종이 단계(paper → paper-2)로 깊이를 낸다. */}
        <section className="relative overflow-hidden border-b border-border bg-[var(--color-paper-2)] py-24 md:py-32">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-stock)] border border-border bg-[var(--color-cotton)] px-4 py-1.5 text-sm font-medium text-[var(--color-muted)]">
              <Code2 className="h-3.5 w-3.5" />
              About Go &amp; Suit
            </div>
            {/* 게이트 2b: 그라디언트 텍스트 → 한 가지 잉크. 강조는 무게로. */}
            <h1 className="mt-6 text-4xl leading-tight md:text-6xl">
              상상을 기술로 현실화하는
              <br />
              비즈니스 가치 파트너
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              고앤슈트(Go &amp; Suit)는 단순한 기능 개발을 넘어 비즈니스의 성공을 위한 '상품'을
              정의하고 만들어갑니다. 기술은 수단일 뿐, 우리의 목표는 고객의 아이디어가
              시장에서 실제로 작동하게 만드는 것입니다.
            </p>
          </div>
        </section>

        {/* ── Philosophy ───────────────────────────────── */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2>Our Philosophy</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  고앤슈트(Go &amp; Suit)는 &apos;실행(Go)&apos;과 &apos;최적화(Suit)&apos;의
                  합성어입니다. 고객의 추상적인 아이디어를 구체적인 기술로 즉시 실행하고, 그
                  결과물이 비즈니스 상황에 완벽하게 맞도록 최적화하는 것이 우리의 사명입니다.
                </p>
                <div className="mt-10 space-y-6">
                  {principles.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      {/* 아이콘은 코튼 스톡 위에. 산호색은 쓰지 않는다. */}
                      <div className="hm-stock flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-ink-2)]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/philosophy.png"
                  alt="고앤슈트 철학 — 실행과 최적화"
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>



        {/* ── Roadmap ───────────────────────────────────── */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-16 text-center">
              <h2>Roadmap</h2>
              <p className="mt-3 text-muted-foreground">고앤슈트의 성장 타임라인</p>
            </div>

            <div className="space-y-10">
              {roadmap.map((item) => (
                <div key={item.title} className="relative flex gap-6">
                  {/* 타임라인 선 */}
                  <div className="flex flex-col items-center">
                    {/* 산호색은 '지금 진행 중인 한 칸'에만 쓴다 — Coral의
                        "the one settled state" 규칙. 나머지는 잉크와 종이. */}
                    <div
                      aria-label={item.status === "current" ? "진행 중" : undefined}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                        item.status === "done"
                          ? "border-[var(--color-rule-2)] bg-[var(--color-paper-3)] text-[var(--color-ink-2)]"
                          : item.status === "current"
                          ? "border-[var(--color-accent-2)] bg-[var(--color-cotton)] text-[var(--color-accent-2)]"
                          : "border-border bg-[var(--color-paper-2)] text-[var(--color-muted)]"
                      }`}
                    >
                      {item.status === "done" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : item.status === "current" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <Rocket className="h-4 w-4" />
                      )}
                    </div>
                    <div className="mt-2 w-px flex-1 bg-border" />
                  </div>

                  <div className="pb-10">
                    {/* 게이트 54(Floor): h3 앞의 "진행 중" 알약은 이브로우였다.
                        사실은 위 마커의 산호색과 aria-label이 대신 전달한다.
                        분기 표기는 '옮겨 적는 값'이라 mono로 — Coral § Type. */}
                    <span
                      className={`hm-fig text-sm font-medium ${
                        item.status === "current"
                          ? "text-[var(--color-accent-2)]"
                          : "text-[var(--color-muted)]"
                      }`}
                    >
                      {item.period}
                    </span>
                    <h3 className="mt-1.5">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="border-t border-border bg-[var(--color-desk)] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="hm-stock inline-flex h-14 w-14 items-center justify-center rounded-full text-[var(--color-ink-2)]">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-8">
              함께 혁신을 만들어갈 파트너를 찾습니다
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              맞춤형 SaaS 개발, 기술 자문, 또는 협업 파트너십이 필요하신가요?
              <br />
              고앤슈트 팀이 여러분의 아이디어를 현실로 만들어 드립니다.
            </p>
            <AboutCta />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
