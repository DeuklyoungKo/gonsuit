import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Globe,
  Mail,
  Rocket,
  Zap,
  CheckCircle2,
  TrendingUp,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — 고앤슈트 (Go & Suit)",
  description:
    "고앤슈트는 상상을 기술로 현실화하는 마이크로 SaaS · AI 솔루션 전문 기업입니다. 우리의 철학, 팀, 그리고 성장 로드맵을 소개합니다.",
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
        <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Code2 className="h-3.5 w-3.5" />
              About Go &amp; Suit
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              상상을 기술로 현실화하는
              <br />
              <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                비즈니스 가치 파트너
              </span>
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
                <h2 className="text-3xl font-bold tracking-tight">Our Philosophy</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  고앤슈트(Go &amp; Suit)는 &apos;실행(Go)&apos;과 &apos;최적화(Suit)&apos;의
                  합성어입니다. 고객의 추상적인 아이디어를 구체적인 기술로 즉시 실행하고, 그
                  결과물이 비즈니스 상황에 완벽하게 맞도록 최적화하는 것이 우리의 사명입니다.
                </p>
                <div className="mt-10 space-y-6">
                  {principles.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
              <h2 className="text-3xl font-bold tracking-tight">Roadmap</h2>
              <p className="mt-3 text-muted-foreground">고앤슈트의 성장 타임라인</p>
            </div>

            <div className="space-y-10">
              {roadmap.map((item) => (
                <div key={item.title} className="relative flex gap-6">
                  {/* 타임라인 선 */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                        item.status === "done"
                          ? "border-primary bg-primary/20 text-primary"
                          : item.status === "current"
                          ? "border-indigo-400 bg-indigo-50 text-indigo-600"
                          : "border-border bg-muted/60 text-muted-foreground"
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
                    <span
                      className={`text-sm font-semibold ${
                        item.status === "done"
                          ? "text-primary"
                          : item.status === "current"
                          ? "text-indigo-500"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.period}
                      {item.status === "current" && (
                        <span className="ml-2 rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-600">
                          진행 중
                        </span>
                      )}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold">{item.title}</h3>
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
        <section className="border-t border-border bg-muted/30 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tight">
              함께 혁신을 만들어갈 파트너를 찾습니다
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              맞춤형 SaaS 개발, 기술 자문, 또는 협업 파트너십이 필요하신가요?
              <br />
              고앤슈트 팀이 여러분의 아이디어를 현실로 만들어 드립니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                협업 문의하기
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                개발 상품 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
