"use client";

import Link from "next/link";
import { Zap, Mail, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { trackMenuClick } from "@/lib/gtag";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "개발 상품", href: "/#services" },
    { label: "Lab", href: "/lab" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--color-paper)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-board)]">
            <Zap className="h-4 w-4 text-[var(--color-board-type)]" />
          </div>
          <span className="text-lg font-bold tracking-tight">고앤슈트</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => trackMenuClick(item.label)}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hm-press hidden items-center gap-2 px-3 py-1.5 text-xs font-medium md:flex">
            <Languages className="h-4 w-4" />
            <span>KR / EN</span>
          </button>
          <Link
            href="/contact"
            onClick={() => trackMenuClick("문의하기")}
            className="hm-press hm-press-primary flex items-center gap-2 px-4 py-2 text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            문의하기
          </Link>
        </div>
      </div>
    </header>
  );
}
