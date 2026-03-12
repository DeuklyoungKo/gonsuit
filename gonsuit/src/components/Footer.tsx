import Link from "next/link";
import { Zap, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Zap className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold">고앤슈트</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Business Tech Partner</span>
          </div>

          <nav className="flex gap-6 text-sm text-muted-foreground">
            {[
              { label: "개발 상품", href: "/#services" },
              { label: "Lab", href: "/lab" },
              { label: "Resources", href: "/resources" },
              { label: "About", href: "/about" },
              { label: "개인정보처리방침", href: "/privacy" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 고앤슈트. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
