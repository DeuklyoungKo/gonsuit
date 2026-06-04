import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gonsuit.com"),
  title: {
    default: "고앤슈트 (Go & Suit) — 비즈니스 테크 파트너",
    template: "%s | 고앤슈트",
  },
  description:
    "고객의 상상을 현실로 만드는 기술력 기반의 마이크로 SaaS 및 AI 솔루션 개발 전문 기업, 고앤슈트입니다.",
  keywords: ["고앤슈트", "Go & Suit", "마이크로 SaaS", "AI 솔루션", "비즈니스 개발", "MVP 제작"],
  alternates: {
    canonical: "https://gonsuit.com",
  },
  openGraph: {
    title: "고앤슈트 (Go & Suit) — 비즈니스 테크 파트너",
    description: "상상을 기술로 현실화하는 고앤슈트의 개발 상품 및 솔루션 소개",
    url: "https://gonsuit.com",
    siteName: "고앤슈트",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "고앤슈트 (Go & Suit) — 비즈니스 테크 파트너",
    description: "상상을 기술로 현실화하는 고앤슈트의 개발 상품 및 솔루션 소개",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
        {/* JSON-LD 구조화 데이터 — Organization + WebSite */}
        <Script id="json-ld-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://gonsuit.com/#organization",
                name: "고앤슈트",
                alternateName: "Go & Suit",
                url: "https://gonsuit.com",
                logo: "https://gonsuit.com/images/logo.png",
                description:
                  "마이크로 SaaS 및 AI 솔루션을 개발하는 기술 파트너. 고객의 아이디어를 2주 내 MVP로 실현합니다.",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "info@gonsuit.com",
                  contactType: "customer service",
                  availableLanguage: ["Korean", "English"],
                },
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": "https://gonsuit.com/#website",
                url: "https://gonsuit.com",
                name: "고앤슈트",
                publisher: { "@id": "https://gonsuit.com/#organization" },
                inLanguage: "ko-KR",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://gonsuit.com/lab?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          })}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WF5QHV9GXV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WF5QHV9GXV');
          `}
        </Script>
      </body>
    </html>
  );
}
