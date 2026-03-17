import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 고앤슈트 (Go & Suit)",
  description: "고앤슈트의 개인정보처리방침입니다. 고객의 소중한 정보를 보호하기 위한 정책을 안내해 드립니다.",
};

export default function PrivacyPage() {
  const lastUpdated = "2026.03.17";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">개인정보처리방침</h1>
          <p className="mt-4 text-muted-foreground">시행 일자: {lastUpdated}</p>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">1. 개인정보의 처리 목적</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트(&apos;https://gonsuit.com&apos; 이하 &apos;고앤슈트&apos;)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
              <li>고객 문의 및 상담 서비스 제공</li>
              <li>서비스 이용에 따른 본인확인 및 알림 발송</li>
              <li>신규 서비스 개발 및 맞춤 서비스 제공</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">2. 수집하는 개인정보의 항목</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 상담 및 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
              <li>필수항목: 이름, 이메일 주소, 문의 내용</li>
              <li>수집방법: 홈페이지 내 문의하기 폼(Contact Form)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">3. 개인정보의 처리 및 보유 기간</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
              <li>상담 및 문의 대응: 상담 완료 후 1년</li>
              <li>관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우: 해당 수사·조사 종료 시까지</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">5. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="text-muted-foreground leading-relaxed">
              정보주체는 고앤슈트에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 이메일(info@gonsuit.com)을 통해 하실 수 있으며, 고앤슈트는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">6. 개인정보의 파기절차 및 파기방법</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 파기합니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">7. 개인정보 보호책임자</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-none pl-0 mt-4 text-muted-foreground space-y-1">
              <li><strong>성명/담당</strong>: 고앤슈트 운영팀</li>
              <li><strong>연락처</strong>: <a href="mailto:info@gonsuit.com" className="text-primary hover:underline">info@gonsuit.com</a></li>
            </ul>
          </section>

          <section className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
            <p>본 방침은 {lastUpdated}부터 시행됩니다.</p>
            <p className="mt-2">연관 서비스: Trend Intelligence</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
