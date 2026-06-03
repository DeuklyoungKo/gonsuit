"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/gtag";

export default function AboutCta() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/contact"
        onClick={() => trackCtaClick("협업 문의하기", "about")}
        className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
      >
        협업 문의하기
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        href="/#services"
        onClick={() => trackCtaClick("개발 상품 보기", "about")}
        className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        개발 상품 보기
      </Link>
    </div>
  );
}
