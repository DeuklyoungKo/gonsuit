import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Key, Layout, Download, ShoppingCart, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — 개발 가이드 & 템플릿",
  description:
    "고앤슈트의 실전 개발 노하우를 담은 PDF 가이드와 템플릿. 마이크로 SaaS 구축, 바이브코딩 스타터킷 등 즉시 활용 가능한 기술 자산을 제공합니다.",
  alternates: {
    canonical: "https://gonsuit.com/resources",
  },
  openGraph: {
    title: "Resources — 고앤슈트 개발 가이드 & 템플릿",
    description:
      "고앤슈트의 실전 개발 노하우를 담은 PDF 가이드와 템플릿. 마이크로 SaaS 구축, 바이브코딩 스타터킷 등 즉시 활용 가능한 기술 자산을 제공합니다.",
    url: "https://gonsuit.com/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources — 고앤슈트 개발 가이드 & 템플릿",
    description:
      "고앤슈트의 실전 개발 노하우를 담은 PDF 가이드와 템플릿. 마이크로 SaaS 구축, 바이브코딩 스타터킷 등 즉시 활용 가능한 기술 자산을 제공합니다.",
  },
};

const products = [
  {
    title: "0원으로 마이크로 SaaS 만드는 법",
    description: "Vercel, Supabase, Cloudflare Workers로 한 푼의 월 고정비 없이 확장 가능한 인프라를 구축하는 실전 로드맵입니다.",
    price: "$9",
    category: "PDF Guide",
    icon: BookOpen,
    color: "text-indigo-600 bg-indigo-50",
    comingSoon: true
  },
  {
    title: "바이브코딩 스타터킷",
    description: "AI 페어 프로그래밍의 효율을 200% 끌어올리는 프롬프트 템플릿과 고앤슈트의 실제 개발 워크플로우를 담았습니다.",
    price: "$5",
    category: "Template",
    icon: Layout,
    color: "text-violet-600 bg-violet-50",
    comingSoon: true
  },
  {
    title: "API 연동 자동화 스크립트 모음",
    description: "자주 쓰이는 외부 API들을 한 줄의 코드로 연결할 수 있는 커스텀 훅과 유틸리티 스크립트 도서관입니다.",
    price: "$12",
    category: "Script Kit",
    icon: Key,
    color: "text-emerald-600 bg-emerald-50",
    comingSoon: true
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 border-b border-border relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Technical Assets</h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              고앤슈트의 개발 노하우를 당신의 프로젝트에 즉시 적용하세요. 
              검증된 가이드와 템플릿으로 개발 시간을 절반으로 줄일 수 있습니다.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10" />
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <div 
                  key={i} 
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-xl"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${product.color}`}>
                    <product.icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {product.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{product.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
                    <div>
                        <span className="block text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Price</span>
                        <span className="text-2xl font-bold">{product.price}</span>
                    </div>
                    
                    {product.comingSoon ? (
                        <button className="flex items-center gap-2 rounded-lg bg-muted px-5 py-2.5 text-sm font-semibold text-muted-foreground cursor-not-allowed">
                            준비 중
                        </button>
                    ) : (
                        <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90">
                            구매하기
                            <ShoppingCart className="h-4 w-4" />
                        </button>
                    )}
                  </div>

                  {product.comingSoon && (
                      <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-widest">
                        Coming soon
                      </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Request Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-card border border-border p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold tracking-tight">필요한 리소스가 없나요?</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    특정 기능의 템플릿이나 기술 가이드가 필요하시다면 제안해 주세요. 
                    고앤슈트의 엔지니어가 검토 후 리소스로 제작해 드립니다.
                  </p>
                  <Link 
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
                  >
                    리소스 요청하기
                    <ExternalLink className="h-4 w-4" />
                  </Link>
               </div>
               <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-primary/10 rotate-3">
                  <Download className="h-16 w-16 text-primary opacity-30 px-3" />
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
