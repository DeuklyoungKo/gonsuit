import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronRight, Newspaper, Code, Lightbulb, Clock } from "lucide-react";

const posts = [
  {
    category: "Technical",
    title: "Vercel + Supabase로 0원 인프라 구축하기",
    description: "초기 MVP 개발 시 비용 걱정 없이 시작할 수 있는 최적의 무료 서버리스 인프라 조합을 소개합니다.",
    date: "2026.03.11",
    readTime: "5 min read",
    icon: Code,
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    category: "Insight",
    title: "AI와 함께하는 '바이브 코딩' 실전 가이드",
    description: "단순한 코드 생성을 넘어, AI와 협동하여 비즈니스 로직을 빠르게 구현하는 워크플로우를 공개합니다.",
    date: "2026.03.05",
    readTime: "7 min read",
    icon: Lightbulb,
    color: "text-amber-600 bg-amber-50"
  },
  {
    category: "Product",
    title: "Trend Scouter 개발기: 데이터 수집의 자동화",
    description: "수만 개의 커뮤니티 데이터를 실시간으로 수집하고 분석하는 파이프라인 구축 과정을 담았습니다.",
    date: "2026.02.25",
    readTime: "6 min read",
    icon: Newspaper,
    color: "text-emerald-600 bg-emerald-50"
  }
];

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
            
            <div className="mt-12 flex flex-wrap gap-4">
               {["All", "Technical", "Insight", "Product", "Business"].map((cat) => (
                 <button 
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                  }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="group block"
                >
                  <article className="flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg">
                    <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center border-b border-border transition-colors group-hover:bg-primary/5">
                       <post.icon className={`h-12 w-12 ${post.color.split(' ')[0]} opacity-40 group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${post.color}`}>
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
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center">
               <button className="px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors">
                 Show More Articles
               </button>
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
