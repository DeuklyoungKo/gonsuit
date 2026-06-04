import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Newspaper, Code, Lightbulb, Clock, TrendingUp } from "lucide-react";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Lab — 기술 인사이트 블로그",
  description:
    "마이크로 SaaS 개발, AI 활용, 바이브코딩 등 고앤슈트가 실전에서 얻은 기술 인사이트와 개발 노하우를 공유합니다.",
  alternates: {
    canonical: "https://gonsuit.com/lab",
  },
  openGraph: {
    title: "Lab — 고앤슈트 기술 인사이트 블로그",
    description:
      "마이크로 SaaS 개발, AI 활용, 바이브코딩 등 고앤슈트가 실전에서 얻은 기술 인사이트와 개발 노하우를 공유합니다.",
    url: "https://gonsuit.com/lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab — 고앤슈트 기술 인사이트 블로그",
    description:
      "마이크로 SaaS 개발, AI 활용, 바이브코딩 등 고앤슈트가 실전에서 얻은 기술 인사이트와 개발 노하우를 공유합니다.",
  },
};

const iconMap = {
  Code: Code,
  Lightbulb: Lightbulb,
  Newspaper: Newspaper,
  TrendingUp: TrendingUp,
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main>
        {/* Header Section */}
        <section className="border-b border-border py-20 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">고앤슈트 Lab</h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                상상을 현실로 만드는 과정에서 얻은 기술적 통찰과
                비즈니스 실험의 기록을 공유합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const Icon = iconMap[post.iconName];
                return (
                  <Link
                    key={post.slug}
                    href={`/lab/${post.slug}`}
                    className="group block"
                  >
                    <article className="flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg">
                      <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center border-b border-border transition-colors group-hover:bg-primary/5">
                        <Icon
                          className={`h-12 w-12 ${post.color.split(" ")[0]} opacity-40 group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${post.color}`}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                        <div className="mt-auto pt-6 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                          <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            Read More <ChevronRight className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 border-t border-border bg-zinc-950 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">기술 인사이트를 메일로 받아보세요</h2>
            <p className="mt-4 text-zinc-400">
              비정기적으로 발행되는 고앤슈트의 최신 기술 트렌드와 실험 결과를 가장 먼저 공유해 드립니다.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                구독하기
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
