import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "고앤슈트 (Go & Suit) — 비즈니스 테크 파트너",
  description:
    "고객의 상상을 현실로 만드는 기술력 기반의 마이크로 SaaS 및 AI 솔루션 개발 전문 기업, 고앤슈트입니다.",
  keywords: ["고앤슈트", "Go & Suit", "마이크로 SaaS", "AI 솔루션", "비즈니스 개발", "MVP 제작"],
  openGraph: {
    title: "고앤슈트 (Go & Suit) — 비즈니스 테크 파트너",
    description: "상상을 기술로 현실화하는 고앤슈트의 개발 상품 및 솔루션 소개",
    url: "https://go-suit.com",
    siteName: "고앤슈트",
    locale: "ko_KR",
    type: "website",
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
      </body>
    </html>
  );
}
