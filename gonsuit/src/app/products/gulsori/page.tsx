import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  BookOpen,
  Headphones,
  Type,
  Moon,
  Bookmark,
  Smartphone,
  CheckCircle2,
  Star,
  Users,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "글소리 — 노안 친화형 텍스트 리더 앱",
  description:
    "txt 파일을 쉽게 불러와 크게 읽고 들을 수 있는 노안 친화형 텍스트 리더 앱. TTS 음성 재생, 5단계 폰트 조절, 다크모드 지원. Google Play 출시 예정.",
  alternates: {
    canonical: "https://gonsuit.com/products/gulsori",
  },
  openGraph: {
    title: "글소리 — 노안 친화형 텍스트 리더 앱",
    description:
      "txt 파일을 쉽게 불러와 크게 읽고 들을 수 있는 노안 친화형 텍스트 리더 앱. TTS 음성 재생, 5단계 폰트 조절, 다크모드 지원.",
    url: "https://gonsuit.com/products/gulsori",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "글소리 — 노안 친화형 텍스트 리더 앱",
    description:
      "txt 파일을 쉽게 불러와 크게 읽고 들을 수 있는 노안 친화형 텍스트 리더 앱.",
  },
};

const features = [
  {
    icon: BookOpen,
    title: "간편한 파일 열기",
    desc: "파일 탐색기에서 .txt 파일을 선택하면 바로 읽기 시작. 마지막으로 열었던 파일은 앱 실행 시 바로 이어읽기 가능.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Headphones,
    title: "TTS 음성 재생",
    desc: "재생·일시정지·정지는 물론, 0.75~1.5배 속도 조절과 문장 앞뒤 이동까지. 이어폰·블루투스 완전 지원.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Type,
    title: "5단계 폰트 크기",
    desc: "16·20·24·28·32px 5단계 조절. 기본값 22px로 노안도 편하게. 줄 간격 1.6 고정으로 가독성 최우선.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Moon,
    title: "3가지 배경 테마",
    desc: "흰색·아이보리·다크모드 중 선택. 환경과 눈 상태에 따라 즉시 전환 가능.",
    color: "bg-zinc-100 text-zinc-600",
  },
  {
    icon: Bookmark,
    title: "책갈피 & 위치 저장",
    desc: "마지막 읽은 위치가 자동 저장되어 앱 재실행 시 이어읽기. 수동 책갈피로 원하는 위치 즉시 저장.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "완전 오프라인 동작",
    desc: "인터넷 없이 모든 핵심 기능 사용 가능. Android 8.0 이상 지원으로 구형 기기도 호환.",
    color: "bg-rose-50 text-rose-600",
  },
];

const targets = [
  { emoji: "👓", label: "50–70대", desc: "스마트폰 텍스트 읽기가 불편한 노안 사용자" },
  { emoji: "📖", label: "독서 애호가", desc: "전자책·소설 TXT 파일을 자주 읽는 사용자" },
  { emoji: "🎧", label: "이동 중 청취", desc: "운전·걷기 중 텍스트를 귀로 듣고 싶은 사용자" },
];

const roadmap = [
  { phase: "1차 MVP", status: "current", items: ["TXT 파일 읽기", "TTS 재생", "폰트·테마 조절", "책갈피", "AdMob 배너"] },
  { phase: "2차 정식", status: "upcoming", items: ["EPUB·PDF 지원", "다중 책갈피", "서재 화면", "전면 광고", "수면 타이머"] },
  { phase: "3차 고도화", status: "upcoming", items: ["클라우드 동기화", "형광펜·메모", "구독 모델(광고 제거)", "홈 위젯"] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "글소리",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description:
    "txt 파일을 쉽게 불러와 크게 읽고 들을 수 있는 노안 친화형 텍스트 리더 앱.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  author: { "@id": "https://gonsuit.com/#organization" },
  url: "https://gonsuit.com/products/gulsori",
};

export default function GulsoriPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <Script
        id="json-ld-gulsori"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 via-background to-background" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/#services"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              개발 상품으로 돌아가기
            </Link>

            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              {/* 앱 아이콘 영역 */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-amber-100 shadow-lg">
                <BookOpen className="h-12 w-12 text-amber-600" />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">글소리</h1>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    출시예정
                  </span>
                </div>
                <p className="mt-3 text-xl text-muted-foreground">
                  노안 친화형 텍스트 리더 앱
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  txt 파일을 불러와 크게 읽고, 들을 수 있는 Android 앱입니다.
                  파일 선택 → 읽기 → 듣기, 3단계로 끝나는 단순함이 핵심입니다.
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
                    <Users className="h-3.5 w-3.5" />
                    50–70대 최적화
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

        {/* ── 핵심 기능 ────────────────────────────────── */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">핵심 기능</h2>
              <p className="mt-3 text-muted-foreground">
                복잡한 기능은 뺐습니다. 꼭 필요한 것만 담았습니다.
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

        {/* ── 출시 로드맵 ──────────────────────────────── */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">출시 로드맵</h2>
              <p className="mt-3 text-muted-foreground">단계별로 기능을 늘려갑니다</p>
            </div>
            <div className="space-y-6">
              {roadmap.map((r) => (
                <div key={r.phase} className={`rounded-2xl border p-6 ${
                  r.status === "current"
                    ? "border-amber-300 bg-amber-50"
                    : "border-border bg-card"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${
                      r.status === "current"
                        ? "bg-amber-200 text-amber-800"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {r.phase}
                    </span>
                    {r.status === "current" && (
                      <span className="text-sm font-medium text-amber-700">● 개발 진행중</span>
                    )}
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${
                          r.status === "current" ? "text-amber-500" : "text-muted-foreground/40"
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
              글소리 출시 알림 및 베타 테스터 모집에 관심이 있으시면 문의해 주세요.
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
