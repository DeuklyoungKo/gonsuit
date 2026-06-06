import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  BookOpen,
  MessageSquare,
  FileText,
  Moon,
  Bookmark,
  Wifi,
  CheckCircle2,
  Star,
  Users,
  Mail,
  Smartphone,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordTap — AI 문법 해설 영어 학습 앱",
  description:
    "영어 문장을 탭 한 번으로 AI가 직역·번역·문법 포인트를 한국어로 해설. 단순 번역이 아닌 '왜 이렇게 쓰였는지' 구조를 알려주는 Android 영어 학습 앱. Google Play 출시 예정.",
  alternates: {
    canonical: "https://gonsuit.com/products/wordtap",
  },
  openGraph: {
    title: "WordTap — AI 문법 해설 영어 학습 앱",
    description:
      "영어 문장을 탭 한 번으로 AI가 직역·번역·문법 포인트를 한국어로 해설. 단순 번역이 아닌 '왜 이렇게 쓰였는지' 구조를 알려주는 영어 학습 앱.",
    url: "https://gonsuit.com/products/wordtap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordTap — AI 문법 해설 영어 학습 앱",
    description:
      "영어 문장을 탭 한 번으로 AI가 직역·번역·문법 포인트를 해설. 번역이 아닌 진짜 영어 학습 앱.",
  },
};

const features = [
  {
    icon: MessageSquare,
    title: "AI 문법 해설 ★ 킬러 피처",
    desc: "문장 드래그 선택 → AI가 ① 직역 ② 자연스러운 번역 ③ 핵심 문법 포인트 2가지를 한국어로 즉시 해설. 구글 번역에는 없는 '왜 이렇게 쓰였는지' 원리 설명.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "단어 탭 즉시 사전",
    desc: "모르는 단어를 탭 한 번으로 한국어 뜻(AI) + 발음기호 + 품사 + 영어 정의 + 예문을 동시에 확인. 단어장에 바로 저장 가능.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: FileText,
    title: "내 텍스트로 공부",
    desc: "교재가 아닌 내가 읽고 싶은 원서·뉴스·업무 문서로 학습. 텍스트 붙여넣기 또는 .txt 파일 선택으로 바로 읽기 시작.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Moon,
    title: "3가지 읽기 테마",
    desc: "화이트·아이보리·다크모드 3종 지원. 폰트 크기 5단계(16~28sp) 조절로 눈이 편안한 독서 환경 제공.",
    color: "bg-zinc-100 text-zinc-600",
  },
  {
    icon: Bookmark,
    title: "단어장 & 읽기 위치 저장",
    desc: "탭한 단어를 단어장에 저장하고 스와이프로 삭제. 마지막으로 읽던 위치가 자동 저장되어 앱 재실행 시 이어읽기 가능.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Wifi,
    title: "하이브리드 AI (무료)",
    desc: "개발자 제공 Groq 키로 하루 무료 AI 해설 제공. 한도 초과 시 본인 Gemini AI Studio 키(카드 없음·무료)로 무제한 사용 가능.",
    color: "bg-amber-50 text-amber-600",
  },
];

const targets = [
  { emoji: "💼", label: "20–40대 직장인", desc: "업무·원서 영어 문장 구조를 이해하고 싶은 사람" },
  { emoji: "📝", label: "시험 준비생", desc: "TOEIC·TOEFL에서 문법 이해가 부족한 사람" },
  { emoji: "📖", label: "영어 원서 독자", desc: "해석은 되지만 '왜'가 이해 안 되는 중급 학습자" },
];

const roadmap = [
  {
    phase: "1차 MVP",
    status: "current",
    items: ["텍스트 붙여넣기·파일 열기", "AI 문법 해설 (하루 무료 제공)", "단어 탭 사전 (한국어+영어)", "단어장 저장·삭제", "AdMob 배너 광고"],
  },
  {
    phase: "2차 정식",
    status: "upcoming",
    items: ["발음 듣기 (TTS)", "복수 AI 지원 (OpenAI)", "퀴즈 모드", "학습 히스토리", "전면 광고 최적화"],
  },
  {
    phase: "3차 고도화",
    status: "upcoming",
    items: ["간격 반복 학습", "구독 모델 (광고 제거)", "클라우드 동기화", "형광펜·메모", "텍스트 어휘 분석 리포트"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WordTap",
  operatingSystem: "Android",
  applicationCategory: "EducationApplication",
  description:
    "영어 문장을 탭 한 번으로 AI가 직역·번역·문법 포인트를 한국어로 해설하는 영어 학습 앱.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  author: { "@id": "https://gonsuit.com/#organization" },
  url: "https://gonsuit.com/products/wordtap",
};

export default function WordTapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <Script
        id="json-ld-wordtap"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-background" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/#services"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              개발 상품으로 돌아가기
            </Link>

            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              {/* 앱 아이콘 */}
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/wordtap-icon.png"
                  alt="WordTap 앱 아이콘"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">WordTap</h1>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    출시예정
                  </span>
                </div>
                <p className="mt-3 text-xl text-muted-foreground">
                  AI 문법 해설 영어 학습 앱
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  영어를 읽다가 모르는 문장이 나오면 드래그 한 번으로 AI가 직역·번역·문법 포인트를
                  한국어로 해설합니다. 구글 번역은 뜻만 알려주지만, WordTap은{" "}
                  <strong className="text-foreground">"왜 이렇게 쓰였는지"</strong>를 알려줍니다.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    <Smartphone className="h-3.5 w-3.5" />
                    Android 8.0+
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5" />
                    무료 (광고 기반)
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    <Zap className="h-3.5 w-3.5" />
                    AI 문법 해설 무료 제공
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    직장인·원서 독자 최적화
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    disabled
                    className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary/40 px-6 py-3 text-sm font-semibold text-primary-foreground opacity-60"
                  >
                    Google Play 출시 예정
                  </button>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    사전 알림 신청
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 차별점 배너 ──────────────────────────────── */}
        <section className="border-b border-border bg-blue-50/50 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-white p-6">
                <p className="text-sm font-semibold text-red-500 mb-2">구글 번역 (기존)</p>
                <p className="text-lg font-bold text-foreground">"이게 무슨 뜻이야?"</p>
                <p className="mt-2 text-muted-foreground text-sm">→ 뜻만 알려줌. 왜 이 구조인지 모름.</p>
              </div>
              <div className="rounded-2xl border border-blue-300 bg-blue-50 p-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">WordTap (차별화)</p>
                <p className="text-lg font-bold text-foreground">"왜 이렇게 쓰인 거야?"</p>
                <p className="mt-2 text-blue-700 text-sm">→ 구조와 원리를 알려줌. 진짜 학습이 됨.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 핵심 기능 ────────────────────────────────── */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">핵심 기능</h2>
              <p className="mt-3 text-muted-foreground">
                번역이 아닌 학습을 위한 기능만 담았습니다
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 목표 사용자 ──────────────────────────────── */}
        <section className="border-b border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">이런 분께 딱 맞습니다</h2>
              <p className="mt-3 text-muted-foreground">
                빠른 번역이 아닌 진짜 영어 실력을 키우고 싶은 분
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {targets.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border border-border bg-card p-8 text-center"
                >
                  <div className="mb-4 text-5xl">{t.emoji}</div>
                  <h3 className="text-lg font-bold">{t.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI 사용 방식 안내 ─────────────────────────── */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight">AI 해설, 무료로 사용하는 법</h2>
              <p className="mt-3 text-muted-foreground">카드 등록 없이 누구나 무료로 사용 가능합니다</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">1</div>
                <div>
                  <p className="font-semibold text-foreground">기본: 개발자 제공 Groq 키 (무료)</p>
                  <p className="mt-1 text-sm text-muted-foreground">앱 설치 즉시 AI 해설 사용 가능. 하루 14,400건 여유 있게 제공. 별도 설정 불필요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-bold">2</div>
                <div>
                  <p className="font-semibold text-foreground">한도 초과 시: 본인 Gemini 키 입력 (역시 무료)</p>
                  <p className="mt-1 text-sm text-muted-foreground">Google 계정만 있으면 AI Studio에서 2분 내 무료 발급. 카드 등록 불필요. 개인당 하루 1,500건 무제한 사용.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 출시 로드맵 ──────────────────────────────── */}
        <section className="border-b border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">출시 로드맵</h2>
              <p className="mt-3 text-muted-foreground">단계별로 학습 기능을 늘려갑니다</p>
            </div>
            <div className="space-y-6">
              {roadmap.map((r) => (
                <div key={r.phase} className={`rounded-2xl border p-6 ${
                  r.status === "current"
                    ? "border-blue-300 bg-blue-50"
                    : "border-border bg-card"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${
                      r.status === "current"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {r.phase}
                    </span>
                    {r.status === "current" && (
                      <span className="text-sm font-medium text-blue-700">● 개발 진행중</span>
                    )}
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${
                          r.status === "current" ? "text-blue-500" : "text-muted-foreground/40"
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">출시 소식을 가장 먼저 받아보세요</h2>
            <p className="mt-4 text-muted-foreground">
              WordTap 출시 알림 및 베타 테스터 모집에 관심이 있으시면 문의해 주세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                출시 알림 신청
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                다른 상품 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
