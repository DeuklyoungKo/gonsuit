import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 고앤슈트 (Go & Suit)",
  description: "고앤슈트의 개인정보처리방침입니다. 고객의 소중한 정보를 보호하기 위한 정책과 AI 서비스 및 광고 서비스 관련 처리 내용을 안내합니다.",
  alternates: {
    canonical: "https://gonsuit.com/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "2026.06.07";

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
              <li>광고 서비스 제공 (Google AdMob을 통한 앱 내 광고 노출)</li>
              <li>AI 서비스 제공 (WordTap 앱의 단어·문장 AI 설명 생성 — Groq AI API 활용)</li>
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
              <li>광고 식별자: Android Advertising ID(ADID) — 앱 내 광고 서비스 제공 목적으로 Google AdMob에 의해 자동 수집될 수 있습니다.</li>
              <li>사용자 선택 텍스트: WordTap 앱에서 단어·문장을 탭할 때 해당 텍스트가 AI 설명 생성 목적으로 Groq Inc. 서버로 전송됩니다. (응답 생성 후 즉시 파기, 저장 없음)</li>
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
            <h2 className="text-xl font-bold mb-4">5. 광고 서비스 제공 (Google AdMob)</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트의 아래 앱은 광고 서비스 제공을 위해 Google AdMob을 사용합니다. 이 과정에서 기기의 광고 식별자(Android Advertising ID)가 수집될 수 있으며, 이는 맞춤형 광고 제공 및 광고 성과 측정 목적으로만 활용됩니다.
            </p>
            <ul className="list-disc pl-6 mt-3 mb-3 text-muted-foreground space-y-1">
              <li><strong>글소리</strong> — 노안 친화형 텍스트 리더 앱 (Android)</li>
              <li><strong>WordTap</strong> — Android 앱</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
            </p>
            <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-1">
              <li>수집 주체: Google LLC (Google AdMob)</li>
              <li>수집 항목: Android Advertising ID (ADID), 앱 사용 정보, 기기 정보</li>
              <li>이용 목적: 맞춤형 광고 노출, 광고 효과 측정</li>
              <li>보유 기간: Google의 개인정보처리방침에 따름</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Google의 개인정보 처리 방식에 대한 자세한 내용은{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google 개인정보처리방침
              </a>
              을 참조하시기 바랍니다. 광고 개인화 설정은 기기의 [설정 → Google → 광고] 메뉴에서 변경하거나 비활성화할 수 있습니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">6. AI 서비스 제공 (Groq AI API)</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트의 <strong>WordTap</strong> 앱은 단어·문장 탭 시 AI 기반 설명을 제공하기 위해 Groq AI API를 사용합니다.
              이 과정에서 사용자가 선택한 텍스트가 Groq Inc.(미국)의 서버로 전송됩니다.
            </p>
            <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-1">
              <li><strong>처리 주체</strong>: Groq Inc. (미국)</li>
              <li><strong>전송 데이터</strong>: 사용자가 앱 내에서 선택(탭)한 단어 또는 문장 텍스트</li>
              <li><strong>이용 목적</strong>: AI 기반 단어·문장 설명 생성</li>
              <li><strong>보유 기간</strong>: AI 응답 생성 후 즉시 파기 (별도 저장 없음)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Groq의 개인정보 처리 방식에 대한 자세한 내용은{" "}
              <a
                href="https://groq.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Groq 개인정보처리방침
              </a>
              을 참조하시기 바랍니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">7. 개인정보의 국외 이전</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 서비스 제공을 위해 아래와 같이 개인정보를 국외로 이전합니다.
              이전 전 정보주체에게 아래 사항을 고지하며, 이전을 원하지 않는 경우 해당 기능 사용을 중단하실 수 있습니다.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-foreground border-b border-border">항목</th>
                    <th className="text-left px-4 py-2 font-semibold text-foreground border-b border-border">내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">이전받는 자</td>
                    <td className="px-4 py-2">Groq Inc.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">이전 국가</td>
                    <td className="px-4 py-2">미국 (United States)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">이전 목적</td>
                    <td className="px-4 py-2">AI 단어·문장 설명 생성 (WordTap 앱)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">이전 항목</td>
                    <td className="px-4 py-2">사용자가 선택한 텍스트 (단어·문장)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">보유·이용 기간</td>
                    <td className="px-4 py-2">AI 응답 생성 후 즉시 파기</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
              ※ 국외 이전에 동의하지 않는 경우, WordTap 앱의 AI 설명 기능 사용을 중단하시면 됩니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">8. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="text-muted-foreground leading-relaxed">
              정보주체는 고앤슈트에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 이메일(info@gonsuit.com)을 통해 하실 수 있으며, 고앤슈트는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">9. 개인정보의 파기절차 및 파기방법</h2>
            <p className="text-muted-foreground leading-relaxed">
              고앤슈트는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 파기합니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">10. 개인정보 보호책임자</h2>
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
            <p className="mt-2">연관 서비스: Trend Scouter, 글소리, WordTap</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
