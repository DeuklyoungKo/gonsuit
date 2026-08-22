import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Radio,
  Smartphone,
  CheckCircle2,
  Star,
  Users,
  Mail,
  Download,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gonsuit.geulsori";

export const metadata: Metadata = {
  title: "글소리 — 큰글씨 TTS 텍스트 리더 앱",
  description:
    "txt·EPUB 파일을 크게 읽고 TTS로 들을 수 있는 노안 친화형 텍스트 리더 앱. 큰 글씨 5단계, 백그라운드 음성 재생, 한글 인코딩 자동 감지, 다크모드 지원. Google Play에서 무료 다운로드.",
  alternates: {
    canonical: "https://gonsuit.com/products/gulsori",
  },
  openGraph: {
    title: "글소리 — 큰글씨 TTS 텍스트 리더 앱",
    description:
      "txt·EPUB 파일을 크게 읽고 TTS로 들을 수 있는 노안 친화형 텍스트 리더 앱. Google Play에서 무료 다운로드.",
    url: "https://gonsuit.com/products/gulsori",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "글소리 — 큰글씨 TTS 텍스트 리더 앱",
    description:
      "txt·EPUB 파일을 크게 읽고 TTS로 들을 수 있는 노안 친화형 텍스트 리더 앱. Google Play 출시.",
  },
};

const features = [
  {
    icon: BookOpen,
    title: "TXT · EPUB 파일 열기",
    desc: "파일 탐색기에서 .txt 또는 .epub 파일을 선택하면 바로 읽기 시작. 한글 인코딩(UTF-8·EUC-KR)을 자동 감지해 글자 깨짐 없이 표시합니다.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Headphones,
    title: "TTS 음성 낭독",
    desc: "재생·일시정지·정지는 물론 속도 조절과 문장 앞뒤 이동까지. 이어폰·블루투스를 완전 지원합니다.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Radio,
    title: "백그라운드 재생",
    desc: "앱을 닫거나 화면을 꺼도 TTS 낭독이 계속됩니다. 다른 앱을 쓰면서, 이동 중에도 귀로 계속 들을 수 있습니다.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Type,
    title: "5단계 큰 글씨",
    desc: "16·20·24·28·32px 5단계 조절. 노안에 맞춘 넉넉한 기본 글씨와 줄 간격으로 가독성을 최우선했습니다.",
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
];

const targets = [
  { emoji: "👓", label: "50–70대", desc: "스마트폰 텍스트 읽기가 불편한 노안 사용자" },
  { emoji: "📖", label: "독서 애호가", desc: "전자책·소설 TXT 파일을 자주 읽는 사용자" },
  { emoji: "🎧", label: "이동 중 청취", desc: "운전·걷기 중 텍스트를 귀로 듣고 싶은 사용자" },
];

const roadmap = [
  { phase: "1차 출시", status: "done", items: ["TXT·EPUB 파일 읽기", "TTS 백그라운드 재생", "한글 인코딩 자동 감지", "폰트·테마 조절", "책갈피 & 위치 저장", "AdMob 배너"] },
  { phase: "2차 정식", status: "upcoming", items: ["PDF 지원", "다중 책갈피", "서재 화면", "수면 타이머", "속도 프리셋"] },
  { phase: "3차 고도화", status: "upcoming", items: ["클라우드 동기화", "형광펜·메모", "구독 모델(광고 제거)", "홈 위젯"] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "글소리 - 큰글씨 TTS 텍스트 리더",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description:
    "txt·EPUB 파일을 크게 읽고 TTS로 들을 수 있는 노안 친화형 텍스트 리더 앱.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  author: { "@id": "https://gonsuit.com/#organization" },
  url: "https://gonsuit.com/products/gulsori",
  downloadUrl: PLAY_STORE_URL,
  installUrl: PLAY_STORE_URL,
  // ⚠️ 평점(aggregateRating)은 Google Play에 실제 평점이 표시된 후에만 추가할 것.
  //    허위·임의 값은 리치 결과 거부 및 수동 조치 대상. 실제 값 확인 후 아래 주석 해제:
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ratingValue: "4.8",   // Play Store 실제 평균 별점
  //   ratingCount: "25",    // Play Store 실제 평가 개수
  // },
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
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/gulsori-icon.png"
                  alt="글소리 앱 아이콘"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">글소리</h1>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    운영중
                  </span>
                </div>
                <p className="mt-3 text-xl text-muted-foreground">
                  큰글씨 TTS 텍스트 리더 앱
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  txt·EPUB 파일을 불러와 크게 읽고, 들을 수 있는 Android 앱입니다.
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
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Google Play에서 다운로드
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    협업 문의
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
                  r.status === "done"
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-border bg-card"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${
                      r.status === "done"
                        ? "bg-emerald-200 text-emerald-800"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {r.phase}
                    </span>
                    {r.status === "done" && (
                      <span className="text-sm font-medium text-emerald-700">✓ 출시 완료</span>
                    )}
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${
                          r.status === "done" ? "text-emerald-500" : "text-muted-foreground/40"
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
            <h2 className="text-3xl font-bold tracking-tight">지금 바로 글소리를 만나보세요</h2>
            <p className="mt-4 text-muted-foreground">
              Google Play에서 무료로 다운로드하실 수 있습니다. 사용 후 소중한 리뷰도 남겨주세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Google Play에서 다운로드
              </a>
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
