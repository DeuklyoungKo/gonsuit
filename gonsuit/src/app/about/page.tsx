import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Globe, Rocket, Users, Zap, ArrowRight, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              상상을 기술로 현실화하는
              <br />
              <span className="text-primary">가치 파트너, 고앤슈트</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
              우리는 단순한 '기능 개발'을 넘어 비즈니스의 성공을 위한 '상품'을 정의하고 만듭니다.
              기술은 수단일 뿐, 우리의 목표는 고객의 아이디어가 시장에서 작동하게 만드는 것입니다.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Philosophy</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  고앤슈트(Go & Suit)는 '실행(Go)'과 '최적화(Suit)'의 합성어입니다.
                  고객의 추상적인 아이디어를 구체적인 기술로 즉시 실행하고,
                  그 결과물이 비즈니스 상황에 완벽하게 맞도록 최적화하는 것이 우리의 사명입니다.
                </p>
                <div className="mt-10 space-y-6">
                  {[
                    {
                      title: "Fast Iteration",
                      desc: "2주 이내의 빠른 MVP 개발로 아이디어를 시장에서 즉시 검증합니다.",
                      icon: Zap
                    },
                    {
                      title: "Business Oriented",
                      desc: "기술적 화려함보다 비즈니스 임팩트와 수익화 가능성을 최우선으로 고려합니다.",
                      icon: Rocket
                    },
                    {
                      title: "Global Ready",
                      desc: "처음부터 글로벌 시장 확장을 고려한 아키텍처와 다국어 기반을 설계합니다.",
                      icon: Globe
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-zinc-100 overflow-hidden border border-border">
                <Image
                  src="/images/philosophy.png"
                  alt="Our Philosophy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap/Timeline */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight mb-16">Roadmap</h2>
            <div className="space-y-12">
              {[
                {
                  period: "2024 Q4",
                  title: "고앤슈트 팀 결성",
                  desc: "AI 및 Full-stack 개발 전문가들이 모여 마이크로 SaaS 특화 개발 팀을 구성했습니다."
                },
                {
                  period: "2025 Q1",
                  title: "Trend Scouter 론칭",
                  desc: "자체 개발한 AI 트렌드 분석 솔루션을 통해 시장 기회를 데이터로 증명하기 시작했습니다."
                },
                {
                  period: "2025 Q2 (Current)",
                  title: "Hub 사이트 구축 및 협업 확장",
                  desc: "고앤슈트의 결과물들을 한곳에 모으고, 파트너사들과의 맞춤형 솔루션 개발을 본격화합니다."
                },
                {
                  period: "2025 Q3+",
                  title: "Global SaaS Expansion",
                  desc: "검증된 솔루션들을 글로벌 독립 서비스로 분리하여 전 세계 사용자를 대상으로 확장합니다."
                }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 border-l border-primary/20">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary">{item.period}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
