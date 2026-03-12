# Serverless 이메일 및 문의 시스템 구축 가이드

이 문서는 별도의 백엔드 서버 유지비용 없이 **Next.js + Supabase + Resend + Cloudflare** 조합으로 강력한 문의 접수 및 이메일 알림 시스템을 구축하는 방법을 정리합니다.

---

## 1. 시스템 아키텍처 개요

전체적인 데이터 흐름과 메신저 역할은 다음과 같습니다.

1.  **사용자 (Client)**: 웹사이트의 문의 폼 작성 및 제출.
2.  **API Route (Serverless Logic)**: Next.js API가 요청을 받아 DB 저장 및 메일 발송 로직 실행.
3.  **Supabase (Database)**: 문의 내용을 영구 저장 (백업 및 관리용).
4.  **Resend (Sending Service)**: 도메인 인증을 통해 공식 이메일 주소로 알림 메일 발송.
5.  **Cloudflare Email Routing (Receiving Service)**: 공식 주소(`info@...`)로 오는 메일을 운영자의 개인 메일로 포워딩.
6.  **Cloudflare DNS (Infrastructure)**: 모든 서비스의 도메인 권한 및 보안 설정을 중앙 관리.

---

## 2. 구성 요소별 역할 및 설정 항목

### A. Cloudflare (DNS 및 이메일 라우팅)
**역할**: 도메인 관리 및 메일 수신 허브.
*   **설정 항목**:
    *   **MX 레코드**: Cloudflare Email Routing 활성화 시 자동 생성되는 3개의 MX 레코드 등록.
    *   **Email Forwarding**: `Custom Address` (예: info@domain.com)를 생성하고 `Destination Address` (개인 메일)와 연결.
    *   **SPF/DKIM 레코드**: Resend 및 Cloudflare의 메일 발송 권한을 증명하는 TXT 레코드 등록.

### B. Resend (메일 발송 API)
**역할**: 코드(API)를 통해 메일을 신속하게 발송.
*   **설정 항목**:
    *   **Domain Verification**: Resend 대시보드에서 도메인 추가 후 발급되는 DNS 레코드를 Cloudflare에 등록.
    *   **API Key**: 서버 측에서 메일을 보낼 때 사용할 `RESEND_API_KEY` 발급.
    *   **From Address**: 인증된 도메인의 주소(예: info@domain.com)를 발신자로 설정.

### C. Supabase (데이터 저장소)
**역할**: 모든 문의 내역의 데이터베이스화.
*   **설정 항목**:
    *   **Table Schema**: 문의 정보를 담을 테이블 생성 (Name, Email, Subject, Message 등).
    *   **RLS (Row Level Security)**: 보안 정책 설정 (필요 시 서비스 롤 사용).

---

## 3. 핵심 체크리스트 (설정 시 주의사항)

### ⚠️ DNS 설정의 핵심 (Cloudflare 기준)
가장 빈번하게 발생하는 오류 해결 가이드입니다.
*   **Proxy Status 체크**: 메일 관련 레코드(MX, TXT)는 반드시 **'DNS Only' (회색 구름)** 상태여야 합니다. 주황색 구름(Proxied)일 경우 인증이 실패할 수 있습니다.
*   **TXT 레코드 이름**: 인증용 DKIM 레코드를 등록할 때, 이름 뒤에 반드시 **`._domainkey`** 형식이 포함되어야 합니다. (예: `resend._domainkey`)
*   **SPF 레코드 병합**: 이미 다른 서비스(예: Cloudflare 머큐리, AWS SES 등)의 SPF가 있다면, 여러 개를 만들지 말고 `include:`를 사용하여 하나의 레코드에 합쳐야 합니다.
    *   *예: "v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all"*

### 🔐 보안 및 환경 변수
*   **Server-side Only**: `RESEND_API_KEY`는 절대 클라이언트 측(`NEXT_PUBLIC_`)에 노출하지 말고 서버 API Route 내에서만 사용해야 합니다.
*   **Domain Verification**: Resend에서 도메인 상태가 **'Verified'** (초록색)가 되기 전까지는 실제 발송이 차단됩니다.

---

## 4. 확장 활용 팁
*   **Subaddressing**: `info+urgent@domain.com` 처럼 `+` 기호를 사용하여 메일함에서 자동 분류 규칙을 만들 수 있습니다.
*   **React Email**: Resend와 찰떡궁합인 React Email 라이브러리를 사용하면 복잡한 HTML 메일 템플릿을 React 컴포넌트처럼 관리할 수 있습니다.
