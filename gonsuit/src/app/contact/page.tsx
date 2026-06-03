"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { trackContactSubmit } from "@/lib/gtag";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            category: formData.get("category"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            // API call will be implemented here
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                trackContactSubmit(data.category as string);
                setIsSubmitted(true);
            } else {
                alert("알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("전송 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h1 className="mt-8 text-3xl font-bold tracking-tight">문의가 접수되었습니다</h1>
                <p className="mt-4 max-w-md text-muted-foreground">
                    고앤슈트를 찾아주셔서 감사합니다. 검토 후 업무일 기준 24시간 이내에 입력하신 이메일로 답변드리겠습니다.
                </p>
                <Link
                    href="/"
                    className="mt-10 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                    메인으로 돌아가기
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b border-border bg-background/80 backdrop-blur-sm px-6 py-4">
                <div className="mx-auto flex max-w-4xl items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        돌아가기
                    </Link>
                    <span className="font-bold">고앤슈트 문의하기</span>
                    <div className="w-20"></div>
                </div>
            </header>

            <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
                <div className="mb-12 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                        <Mail className="h-6 w-6" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">협업 및 서비스 문의</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        고앤슈트와 함께 비즈니스 가치를 만들어가세요.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">이름 / 회사명</label>
                            <input
                                id="name"
                                name="name"
                                required
                                placeholder="홍길동 / 고앤슈트"
                                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">이메일 주소</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="name@company.com"
                                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">문의 항목</label>
                        <select
                            id="category"
                            name="category"
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring appearance-none"
                        >
                            <option value="">항목을 선택해주세요</option>
                            <option value="saas">마이크로 SaaS 도입 문의</option>
                            <option value="development">맞춤형 소프트웨어 개발</option>
                            <option value="consulting">AI 비즈니스 컨설팅</option>
                            <option value="partnership">기타 제휴 문의</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">제목</label>
                        <input
                            id="subject"
                            name="subject"
                            required
                            placeholder="문의 내용을 간략히 요약해주세요"
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">상세 내용</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="구체적인 필요 사항이나 궁금하신 점을 입력해주세요"
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-95 disabled:opacity-50"
                    >
                        {loading ? "전송 중..." : "문의하기"}
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </main>
        </div>
    );
}
