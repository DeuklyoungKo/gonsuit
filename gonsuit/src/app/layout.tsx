import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "gonsuit — Micro SaaS Hub",
  description:
    "글로벌 트렌드를 가장 빠르게 한국 창업가·개발자의 언어로 번역하는 곳. 마이크로 SaaS 서비스를 개발하고 수익화를 검증합니다.",
  keywords: ["마이크로 SaaS", "바이브코딩", "1인 창업", "AI 트렌드", "인디 해커"],
  openGraph: {
    title: "gonsuit — Micro SaaS Hub",
    description: "글로벌 트렌드를 한국 시장으로 번역하는 마이크로 SaaS 허브",
    url: "https://gonsuit.com",
    siteName: "gonsuit",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
