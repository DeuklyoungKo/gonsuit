export interface Post {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  iconName: "Code" | "Lightbulb" | "Newspaper" | "TrendingUp";
  color: string;
  content: string; // HTML
}

export const posts: Post[] = [
  {
    slug: "ai-vibe-coding-survival",
    category: "Insight",
    title: "AI 시대, 1인 바이브코딩 개발자가 오래 살아남는 방법",
    description:
      "AI가 대부분의 기능을 대체하는 시대, 1인 개발자가 살아남으려면 무엇을 만들어야 할까요? AI가 약한 영역과 앞으로 유리한 서비스 방향을 정리했습니다.",
    date: "2026.06.03",
    readTime: "8 min read",
    iconName: "TrendingUp",
    color: "text-violet-600 bg-violet-50",
    content: `
<p>최근 개발을 하면서 드는 생각이 있습니다.</p>
<p>예전에는 하나의 기능만 잘 만들어도 서비스가 될 수 있었습니다.</p>
<ul>
  <li>사주 해석</li>
  <li>번역</li>
  <li>블로그 글 생성</li>
  <li>코드 설명</li>
  <li>여행 추천</li>
  <li>요약 서비스</li>
</ul>
<p>하지만 지금은 다릅니다.</p>
<p>사용자는 굳이 별도의 사이트에 접속하지 않아도 AI 채팅창 하나만 열면 대부분의 기능을 해결할 수 있습니다. 실제로 간단한 정보 제공형 서비스는 AI에게 빠르게 대체되고 있습니다.</p>
<p>그렇다면 앞으로 1인 개발자는 무엇을 만들어야 오래 살아남을 수 있을까요?</p>

<h2>AI가 강한 영역 vs 약한 영역</h2>

<h3>AI가 강한 영역</h3>
<ul>
  <li>지식 생성</li>
  <li>텍스트 생성</li>
  <li>일반 상담</li>
  <li>범용 자동화</li>
  <li>단순 정보 제공</li>
</ul>

<h3>AI가 아직 약한 영역</h3>
<ul>
  <li>실제 데이터 접근</li>
  <li>실시간 운영</li>
  <li>커뮤니티</li>
  <li>사람 간 신뢰</li>
  <li>특정 업계 워크플로우</li>
  <li>현장 연결</li>
  <li>실행 자동화</li>
  <li>지속적 관리</li>
  <li>감성 / 팬덤 / 재미</li>
</ul>

<blockquote>핵심은 이것입니다. "답변" 자체는 AI가 무료로 해준다. 하지만 "현실 문제 해결 시스템"은 아직 개발자가 만든다.</blockquote>

<h2>앞으로 유리한 서비스 방향</h2>

<h3>1. AI를 활용한 업계 운영 도구</h3>
<p>단순 AI 채팅이 아니라, 실제 업무 흐름에 깊게 들어가는 서비스입니다.</p>
<p><strong>예시:</strong> 행사 안전 관제 대시보드, CCTV 혼잡도 분석, AI 민원 분류, AI 문서 검수, AI 계약서 비교, AI CS 요약, AI 운영 리포트</p>
<p>이런 서비스는 단순히 AI 답변만으로 대체되지 않습니다. 왜냐하면 실제 현업에서는 업체 데이터 연결, 관리자 권한, 운영 화면, 로그 기록, 자동화, 실시간 처리가 필요하기 때문입니다.</p>
<p>즉, 중요한 것은 AI 자체가 아니라 <strong>"운영 시스템"</strong>입니다.</p>

<h3>2. 데이터가 쌓이는 서비스</h3>
<p>AI는 범용 지식은 강하지만, 내 서비스만 가진 데이터는 없습니다.</p>
<p><strong>예시:</strong> AI 음악 평가 데이터, 사용자 피드백 데이터, 특정 업계 사례 DB, 행사 안전 사고 사례, AI 툴 리뷰 커뮤니티, 한국형 프롬프트 데이터</p>
<blockquote>핵심 질문: "시간이 지날수록 데이터 자산이 쌓이는가?"</blockquote>

<h3>3. 실행까지 대신하는 AI</h3>
<p>앞으로 중요한 것은 "답변"이 아니라 "실행"입니다.</p>
<p>예전에는 블로그 제목 추천, 여행 추천, 코드 설명이었다면, 앞으로는 자동 발행 + SEO + 배포, 예약 + 일정 관리, 실제 서버 배포 + 모니터링입니다.</p>
<p>단순 AI 챗봇보다 <strong>"AI 오퍼레이터"</strong> 형태가 훨씬 강력합니다.</p>

<h3>4. 현장 기반 서비스</h3>
<p>AI는 현실 세계와 연결되는 영역에 아직 약합니다.</p>
<p><strong>예시:</strong> CCTV, 키오스크, 출입 시스템, 행사 운영, 병원/학원 관리, 매장 운영</p>
<p>이 영역은 설치, 유지보수, 운영, 커스터마이징이 필요하기 때문에 쉽게 대체되지 않습니다. 특히 한국 시장에서는 지자체, 행사 운영사, 보안 업체, 관제 업체 같은 분야가 큰 기회가 될 수 있습니다.</p>

<h3>5. 커뮤니티와 팬덤</h3>
<p>AI는 정보를 만들 수는 있어도, 사람들의 소속감까지 만들지는 못합니다. 사람은 결국 인정받고 싶고, 경쟁하고 싶고, 모이고 싶어합니다.</p>
<p>특정 게임 커뮤니티, AI 툴 커뮤니티, 평가 플랫폼, 팬덤형 서비스 같은 영역은 생각보다 오래 살아남습니다.</p>

<h2>반대로 위험한 영역</h2>
<p>다음 분야는 AI 대체 속도가 매우 빠릅니다.</p>
<ul>
  <li>단순 정보 제공 사이트</li>
  <li>AI 채팅 래퍼</li>
  <li>단순 글 생성기 / 번역기 / 요약기</li>
  <li>일반 상담 서비스</li>
  <li>단순 사주/운세 생성</li>
</ul>
<p>사용자는 결국 ChatGPT를 켜면 되기 때문입니다.</p>

<h2>앞으로 중요한 개발 전략</h2>

<h3>1. 개발 속도를 극단적으로 높여라</h3>
<p>이제는 완성도 경쟁보다, <strong>실험 횟수 경쟁</strong>에 가까워지고 있습니다. AI 바이브코딩의 가장 큰 장점은 빠른 MVP 제작, 빠른 검증, 빠른 자동화입니다. 많이 시도하는 사람이 유리한 시대가 되고 있습니다.</p>

<h3>2. 작은 B2B를 노려라</h3>
<p>개인 사용자 대상 서비스는 AI 대체 속도가 빠릅니다. 오히려 업체, 운영팀, 현장 관리자, 소규모 기업의 문제를 해결하는 SaaS가 오래 갑니다.</p>
<blockquote>월 5만~30만원 정도의 작은 SaaS 여러 개가 오히려 안정적인 구조가 될 수 있습니다.</blockquote>

<h3>3. AI를 경쟁자가 아니라 "부품"으로 활용하라</h3>
<p>앞으로 개발자는 AI와 경쟁하는 사람이 아니라, AI를 연결해서 시스템을 만드는 사람이 될 가능성이 높습니다. GPT, Gemini, Claude, Vision AI 같은 모델을 "엔진"처럼 활용해 실제 운영 문제를 해결하는 방향이 중요해지고 있습니다.</p>

<h2>마무리</h2>
<p>예전에는 <strong>"AI로 무엇을 만들까?"</strong>를 고민했다면, 앞으로는 <strong>"AI가 있어도 사람들이 계속 돈 내고 사용할 운영 시스템은 무엇인가?"</strong>를 고민해야 하는 시대가 오고 있습니다.</p>
<p>그 답은 대부분 데이터, 운영, 자동화, 현장, 워크플로우, 커뮤니티 안에 있습니다.</p>
<p>AI 시대일수록 오히려 <strong>"현실 문제를 해결하는 개발자"</strong>의 가치가 더 커질 수도 있습니다.</p>
    `.trim(),
  },
  {
    slug: "vercel-supabase-free-infra",
    category: "Technical",
    title: "Vercel + Supabase로 0원 인프라 구축하기",
    description:
      "초기 MVP 개발 시 비용 걱정 없이 시작할 수 있는 최적의 무료 서버리스 인프라 조합을 소개합니다.",
    date: "2026.03.11",
    readTime: "5 min read",
    iconName: "Code",
    color: "text-indigo-600 bg-indigo-50",
    content: `
<p>마이크로 SaaS를 처음 시작할 때 가장 큰 장벽 중 하나는 인프라 비용입니다. 하지만 Vercel과 Supabase를 조합하면 월 고정비 0원으로 프로덕션 수준의 서비스를 운영할 수 있습니다.</p>
<h2>왜 Vercel + Supabase인가?</h2>
<p>Vercel은 Next.js 최적화 배포 플랫폼으로 Hobby 플랜에서 개인 프로젝트를 무료로 호스팅할 수 있습니다. Supabase는 PostgreSQL 기반의 오픈소스 Firebase 대안으로 무료 플랜에서도 충분한 기능을 제공합니다.</p>
<h2>무료 한도 요약</h2>
<ul>
  <li><strong>Vercel Hobby</strong>: 개인 프로젝트 무제한, 100GB 대역폭/월</li>
  <li><strong>Supabase Free</strong>: 500MB DB, 1GB 파일 스토리지, 50,000 MAU</li>
</ul>
<h2>기본 세팅 방법</h2>
<p>Next.js 프로젝트를 생성하고 Supabase 클라이언트를 설치한 뒤, 환경변수만 연결하면 바로 사용할 수 있습니다. 복잡한 서버 설정 없이 10분 안에 풀스택 앱의 기반을 완성할 수 있습니다.</p>
<p>추후 트래픽이 늘어나더라도 각 플랫폼의 유료 플랜으로 자연스럽게 확장할 수 있는 구조입니다.</p>
    `.trim(),
  },
  {
    slug: "vibe-coding-guide",
    category: "Insight",
    title: "AI와 함께하는 '바이브 코딩' 실전 가이드",
    description:
      "단순한 코드 생성을 넘어, AI와 협동하여 비즈니스 로직을 빠르게 구현하는 워크플로우를 공개합니다.",
    date: "2026.03.05",
    readTime: "7 min read",
    iconName: "Lightbulb",
    color: "text-amber-600 bg-amber-50",
    content: `
<p>바이브 코딩(Vibe Coding)은 단순히 AI에게 코드를 생성시키는 것이 아닙니다. AI와 리듬을 맞춰 아이디어를 빠르게 현실로 구현하는 새로운 개발 방식입니다.</p>
<h2>바이브 코딩의 핵심 원칙</h2>
<ul>
  <li><strong>컨텍스트를 풍부하게</strong>: AI에게 비즈니스 목표와 제약 조건을 먼저 설명하세요.</li>
  <li><strong>작게 쪼개기</strong>: 한 번에 큰 기능을 요청하기보다 작은 단위로 나눠 검증하세요.</li>
  <li><strong>피드백 루프 빠르게</strong>: 결과물을 바로 실행해보고 즉시 수정 방향을 제시하세요.</li>
</ul>
<h2>실전 워크플로우</h2>
<p>먼저 전체 구조(컴포넌트 트리, 데이터 흐름)를 AI와 함께 설계합니다. 그 다음 개별 기능을 순서대로 구현하되, 각 단계마다 실제 동작을 확인합니다. 마지막으로 엣지 케이스와 에러 처리를 보강합니다.</p>
<blockquote>핵심은 AI를 "코드 자판기"가 아니라 "페어 프로그래밍 파트너"로 대하는 것입니다.</blockquote>
<p>이 방식으로 고앤슈트는 대부분의 MVP를 2주 이내에 완성합니다.</p>
    `.trim(),
  },
  {
    slug: "trend-scouter-dev-story",
    category: "Product",
    title: "Trend Scouter 개발기: 데이터 수집의 자동화",
    description:
      "수만 개의 커뮤니티 데이터를 실시간으로 수집하고 분석하는 파이프라인 구축 과정을 담았습니다.",
    date: "2026.02.25",
    readTime: "6 min read",
    iconName: "Newspaper",
    color: "text-emerald-600 bg-emerald-50",
    content: `
<p>Trend Scouter는 Reddit, Product Hunt, Indie Hackers 등 글로벌 커뮤니티에서 비즈니스 트렌드를 자동으로 수집하고 분석하는 서비스입니다. 이 글에서는 데이터 수집 자동화 파이프라인을 어떻게 구축했는지 공유합니다.</p>
<h2>문제 정의</h2>
<p>글로벌 트렌드를 수동으로 모니터링하는 것은 시간이 너무 많이 걸립니다. 하루에도 수천 개의 게시물이 올라오는 커뮤니티에서 가치 있는 신호를 자동으로 추출하는 시스템이 필요했습니다.</p>
<h2>파이프라인 구조</h2>
<ul>
  <li><strong>수집</strong>: Reddit API, Product Hunt API를 통한 실시간 데이터 수집</li>
  <li><strong>필터링</strong>: 키워드 및 인게이지먼트 기반 1차 필터</li>
  <li><strong>분석</strong>: Gemini API를 통한 수익성·난이도·한국 적합도 스코어링</li>
  <li><strong>저장</strong>: Supabase PostgreSQL에 구조화된 형태로 저장</li>
</ul>
<h2>핵심 인사이트</h2>
<p>자동화의 핵심은 완벽한 필터링이 아니라 "좋은 신호를 놓치지 않는 것"이었습니다. 노이즈가 조금 있더라도 리콜(재현율)을 높이는 방향으로 설계했고, 이후 AI 스코어링으로 정밀도를 높였습니다.</p>
<p>현재 99개 이상의 트렌드를 분석 완료했으며, 그 중 다수가 실제 사업 아이디어로 발전 중입니다.</p>
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
