import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://gonsuit.com/lab/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://gonsuit.com/lab/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "고앤슈트",
      "@id": "https://gonsuit.com/#organization",
    },
    publisher: { "@id": "https://gonsuit.com/#organization" },
    datePublished: post.date,
    url: `https://gonsuit.com/lab/${post.slug}`,
    mainEntityOfPage: `https://gonsuit.com/lab/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <Script
        id="json-ld-article"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* 뒤로가기 */}
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Lab으로 돌아가기
        </Link>

        {/* 헤더 */}
        <header className="mb-12">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider mb-4 ${
              post.color
            }`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1.5">
              <span>고앤슈트</span>
            </div>
          </div>
        </header>

        {/* 본문 */}
        <article
          className="prose prose-zinc max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-base prose-p:leading-relaxed prose-p:text-foreground prose-p:my-4
            prose-ul:my-4 prose-li:text-foreground prose-li:leading-relaxed
            prose-strong:text-foreground
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5
            prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
            prose-blockquote:text-foreground prose-blockquote:not-italic prose-blockquote:my-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 하단 CTA */}
        <div className="mt-20 border-t border-border pt-12 text-center">
          <p className="text-muted-foreground mb-6">
            고앤슈트의 기술과 서비스에 관심이 있으신가요?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              협업 문의하기
            </Link>
            <Link
              href="/lab"
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              다른 글 보기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
