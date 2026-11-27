# 5_DESIGN_RENEWAL.md — Hallmark 기반 디자인 리뉴얼 진행 절차

> **SSOT 경계**: 이 문서는 **이 리뉴얼 작업 한 건**의 절차·결정 근거만 소유한다.
> 기술 스택 · 디렉토리 구조 · 상품 현황 · GA4/SEO 규칙 · 커밋 규칙은 `CLAUDE.md`가 SSOT다. 여기서 반복하지 않는다.
> 작업이 끝나면 상단에 완료 표기 후 **동결**한다. (문서 규약: `5_*.md` = 작업 단위 기록 문서)

**작성 2026-11-26 · 상태: 계획 (미착수)**

---

## 0. Hallmark이 무엇인가 (확인된 사실)

출처: https://github.com/nutlope/hallmark (v2.0.0, 2026-11-26 확인)

- **디자인 에이전트 스킬**이다. 앱도, 컴포넌트 라이브러리도, Figma 플러그인도 아니다. Claude Code / Codex / Cursor 등에 `SKILL.md`를 설치해서 쓴다.
- 목적은 "AI가 만든 티가 나는 화면"을 막는 것이다. 테마·토큰·게이트(검사 규칙)로 강제한다.
- **동작 방식은 세 가지뿐이다.**

  | 호출 | 뜻 |
  |---|---|
  | `/hallmark <프롬프트>` | 신규 페이지 빌드 |
  | `/hallmark redesign <경로>` | 기존 화면 재설계. **내용과 배선(링크·핸들러)은 유지**, 시스템과 레이아웃을 바꾼다 |
  | `/hallmark audit <경로>` | 리포트만. 코드 변경 없음 |

  - 수정자: `redesign` 뒤에 **"keep the layout"**(스타일만) 또는 **"polish"**(티 나는 부분만)
  - 사용자가 Hallmark를 **이름으로 부를 때만** 작동한다. 그 밖의 디자인 변경은 "Hallmark 런이 아니다".
- **산출물**: `theme.mjs scaffold`가 프로젝트 스타일시트 옆에 `tokens.css`(테마 토큰) + `base.css`를 만들고, 에이전트는 페이지만 쓴다. CSS 첫 줄에 Hallmark 스탬프가 박힌다. `.hallmark/log.json`에 빌드 로그, `.hallmark/preflight.json`에 사전 조사 결과가 쌓인다.
- **테마 50종.** `theme.mjs deal --genre <장르> --prompt "<설명>"`이 3개를 제안하고 에이전트가 그림을 보고 고른다. 장르는 `atmospheric` / `modern-minimal` / `playful` / `editorial`(기본). 테마를 직접 지정할 수도 있고, `custom`은 테마를 버리고 자유 설계한다.
- **게이트(검사)**: `Floor` 16항목(면제 불가) / `Reflex`(사유를 기록하면 면제 가능) / `Finish`(비차단). 마지막에 fresh-context 서브에이전트가 리뷰하고 `recapture` / `rebuild` / `fix` / `ship` 중 하나로 답한다.
- **`design.md`(또는 `DESIGN.md`)가 프로젝트 루트에 있으면 그것이 모든 것을 덮어쓴다.** → 우리 브랜드 제약을 고정하는 유일한 레버다.
- 기존 코드베이스 규칙: 사전 조사(pre-flight)로 프로젝트를 먼저 읽고, **건드릴 파일을 먼저 이름으로 밝히며**, 기존 스타일시트는 **append-only**(마지막 `@import` 바로 뒤에만 삽입, 규칙이나 `@tailwind` 아래에는 넣지 않음)로 다룬다.

**2026-11-27 저장소 원문 확인으로 추가 확정된 사실**

- **깊이(depth)는 세 단계다.** `full`(내용·배선 유지 / 시스템·구성 변경 — verb의 기본값) · `restyle`("keep the layout" 등으로 요청할 때만, 레이아웃 유지 / 색·타입·radius·shadow·모션만) · `polish`("polish", "keep our look" — 게이트가 지적한 것만). **섞이지 않는다.**
- **`.tsx`를 다룬다.** redesign.md에 "Edit markup inside the component that owns it", "edit: app/page.tsx" 예시가 명시돼 있다. 컴포넌트 안의 Tailwind 유틸리티도 sloplint의 정적 검사 대상(class M)이다.
- **Tailwind v3 경로가 문서화돼 있다.** `tokens.css`는 `:root` 한 블록으로, 스탬프와 두 `@import`는 **`@tailwind` 디렉티브 위에** (아래에 두면 CSS가 버린다), `base.css`는 `layer(base)`로. → 이 프로젝트(3.4.1)에 그대로 해당한다.
- **shadcn 매핑 절이 따로 있다** (`export-formats.md` § shadcn/ui). → §1-1 참조.
- **`audit`은 dev 서버가 필요하다.** "In a framework project start the dev server and record through `--url`; the linter does not render the empty shell `index.html` from disk." 즉 `sloplint --before --render --url <route>`로 기록한 뒤 gates.md §1·§4·§5를 걸어 `file:line`으로 보고한다. 프로젝트 파일은 건드리지 않는다.
- **기존 스타일시트는 redesign에서 편집 대상이다.** "The stylesheet is the redesign's to edit: the append-only rule guards it from a build, not from its own redesign." → `globals.css`는 그대로 남지 않는다.
- **git 트리가 깨끗해야 한다.** "ask the user to commit or stash; never do it for them" — Hallmark가 알아서 커밋하지 않는다(이 프로젝트 커밋 규칙과 일치).
- **3페이지를 넘기면** 페이지마다 서브에이전트에 나눠 주고, 시스템은 `design.md`로 한 번 고정한다.
- 테마 파일은 51개(`.md`) + 사진 50장. 스킬 폴더 전체 7.2MB.

---

## 1. 이 프로젝트에 적용할 때의 충돌점 ⚠️ 착수 전 결정 필요

### 1-1. 토큰 체계가 둘이 된다 (가장 큰 문제)

| | 현재 | Hallmark |
|---|---|---|
| 위치 | `gonsuit/src/app/globals.css` | `tokens.css` (새로 생성) |
| 형식 | shadcn 관례 HSL 삼중값 `--primary: 243 75% 59%` | OKLCH 값 |
| 소비 | `tailwind.config.js`가 `hsl(var(--primary))`로 래핑 | CSS 커스텀 프로퍼티 직접 |

Hallmark에는 **shadcn 매핑 절이 이미 있다**(`export-formats.md` § shadcn/ui). 권장 방식은 shadcn 변수를 Hallmark 토큰으로 **가리키게** 하는 것이다.

```css
--primary: var(--color-accent);
--background: var(--color-paper);
--border: var(--color-rule);
--radius: var(--radius-card);
```

**그런데 이 프로젝트에는 그대로 적용하면 색이 전부 깨진다.** Hallmark의 예시는 shadcn 변수가 **완전한 색값**을 담는 최신 포맷을 전제한다. 이 프로젝트는 **구형 HSL 삼중값 포맷**이다.

```js
// tailwind.config.js — 현재
primary: { DEFAULT: "hsl(var(--primary))" }
```

`--primary: var(--color-accent)`를 넣으면 `hsl(oklch(62% 0.17 28))`이 되어 **무효 색이 되고, 에러 없이 조용히 깨진다.**

→ **매핑을 쓰려면 `tailwind.config.js`의 `hsl(var(--x))` 래핑을 `var(--x)`로 먼저 걷어내야 한다.** 색 토큰 전체(23개)를 건드리는 작업이고, 8개 페이지가 전부 이 토큰에 의존한다.

- **(A) 전환**: `tailwind.config.js`에서 `hsl()` 래핑 제거 → shadcn 변수를 Hallmark 토큰에 매핑 → `tokens.css`가 소유자
- **(B) 참조**: shadcn 토큰 유지. Hallmark 출력은 **색 참조**로만 쓰고 사람이 HSL 삼중값으로 옮긴다

> 추가 주의: shadcn의 `accent`·`muted`는 Hallmark의 `--color-accent`·`--color-muted`와 **뜻이 충돌한다**(shadcn의 accent는 hover 표면). Hallmark 문서는 그 두 토큰을 `@theme`에서 빼거나 `--color-signal`·`--color-ink-3`으로 개명하라고 한다.

#### ✅ (A) 전환 완료 2026-11-27 — 실제로 걸린 함정

**단순히 `hsl(var(--x))` → `var(--x)`로 바꾸면 투명도 수식어가 조용히 깨진다.**

Tailwind 3는 `hsl(var(--x))` 형태를 특별 취급해서 알파를 **괄호 안에** 주입한다. 그래서 `bg-primary/10`이 `hsl(var(--primary)/.1)`로 컴파일된다 — **토큰이 삼중값이라서** 성립하는 동작이다. 토큰을 완전한 색값으로 바꾸고 설정을 맨 `var(--x)`로 두면 Tailwind가 알파를 넣을 자리가 없어진다. 이 프로젝트에는 `bg-primary/10`·`bg-primary/5`·`border-primary/20`·`bg-background/80`(글래스 헤더)·`from-primary/5` 등 **그런 유틸리티가 15곳 있다.**

**해법: `<alpha-value>` + `color-mix()`**

```js
// tailwind.config.js — 전환 후 (색 토큰 23개 전부 이 형태)
primary: { DEFAULT: "color-mix(in oklab, var(--primary) calc(<alpha-value> * 100%), transparent)" }
```

```css
/* globals.css — 토큰은 완전한 색값으로 */
--primary: hsl(243 75% 59%);   /* 삼중값 243 75% 59% 에서 변경 */
```

`<alpha-value>`는 Tailwind가 숫자로 치환하므로 `bg-primary/10` → `color-mix(in oklab, var(--primary) calc(.1 * 100%), transparent)`가 되어 **그대로 동작한다.** 색 포맷에 의존하지 않으므로, 나중에 `--primary: var(--color-accent)`(OKLCH)로 바꿔도 설정은 손댈 필요가 없다 — 이것이 (A)의 목적이다.

**검증 결과**: `npm run build` 통과. `sloplint --render` 게이트 결과가 전환 전과 **완전히 동일**(대비 게이트 40·41 신규 0건) → 색이 똑같이 렌더된다. 투명도 유틸리티 10종 전부 보존. 그라디언트는 전부 명시적 `to-` 스톱을 갖고 있어 영향 없음.

**부작용과 그 해소**: 전환 직후 게이트 48(토큰 밖 색 literal)이 1 → 33건으로 늘었다. `:root`와 `.dark` 두 블록이 있으면 sloplint가 한쪽만 토큰 블록으로 보기 때문이다. **다크모드 제거로 블록이 하나가 되자 다시 1건으로 돌아왔다** (남은 1건은 `font-family: 'Inter'` literal — 폰트 교체 때 해소된다).

### 1-2. 출력 형식이 다르다

Hallmark는 self-contained HTML + CSS를 전제로 쓰여 있고, 이 저장소는 Next.js App Router + `.tsx` + Tailwind 유틸리티 클래스다. 기존 프로젝트 감지(`package.json`·Tailwind config·`:root`·토큰·폰트 링크)와 append-only 규칙은 문서화돼 있으나, **`.tsx` 직접 수정은 문서에 없다.**

→ **파일럿 1페이지로 실제 거동을 먼저 본다. 확인 전에 8페이지를 맡기지 않는다.**

### 1-3. 한글 타이포그래피

현재 본문 폰트는 **Inter**다. Inter에는 한글 글리프가 없어 한글은 OS 폴백으로 렌더된다.

Hallmark 쪽 사정은 더 분명하다.

- **`fonts.md`가 Inter를 "Banned as a default"로 명시한다.** "Every model reaches for these first, so they read as unchosen: Inter, Roboto, ..." → 게이트 **1(Reflex)** 이 바로 걸린다. 예외: "the pre-flight found it in the project; then the stamp says so" — 즉 **유지하고 싶으면 명시적으로 지켜 줘야 한다.**
- `redesign.md`는 더 세다. "a look the gates name (the purple-to-blue gradient, **Inter as the display**, a stock swatch) **is not a brand**: restyle and full replace it" → Hallmark는 지금의 Inter + 인디고를 **브랜드가 아니라 기본값으로 보고 교체한다.**
- **`fonts.md`의 폰트 목록은 전부 라틴 전용이다.** 한글 폰트(Pretendard, Noto Sans KR, Gothic A1 등)는 **단 하나도 없다.** 테마가 지정하는 display/body 조합에 한글 글리프가 없으면 한글은 그대로 폴백으로 떨어진다.

→ **한글 폰트는 우리가 정해 `design.md`에 고정하는 수밖에 없다.** 정하지 않으면 테마가 라틴 전용 face를 지정하고, 한글 본문은 지금보다 나빠질 수 있다. (후보: Pretendard — 한글 + 라틴 동시 커버, 가변 폰트)

### 1-4. 지금 코드가 게이트에 걸리는 지점

> **실측 결과는 §8이 소유한다** (`sloplint` 실제 실행: 29 FAIL · 20 REFLEX · 18 WARN). 여기서 반복하지 않는다.
> 요약: 접근성(포커스 링 전무 · 대비 6건)이 가장 시급하고, 그다음이 이모지 아이콘 6곳과 `transition-all` 5곳이다.

착수 전 **결정이 필요한 것만** 남긴다.

- **숫자 주장** ("2주 내 MVP 개발", "99개 트렌드 분석", "100% 고객 만족도") → 게이트 46a는 판단(J) 등급이라 스크립트가 잡지 않는다. **사람이 판단해야 한다.** 실측값이면 `design.md`에 "실제 값, 유지"로 명시한다. 근거가 없는 값이면 리뉴얼 전에 내린다 (§8-5)
- ~~**다크모드**~~ → **제거 완료** (§3 Phase 2). 나중에 도입한다면 `references/dark-mode.md`의 parity 방식을 따른다 — 전 토큰 재유도, 양 모드 대비 게이트 전수 검사, 그림자 대신 명도 사다리

### 1-5. 절대 잃어서는 안 되는 것

`sloplint --before` / `--kept`가 지켜 주는 것은 **link · field · handler · heading**이다. 아래 중 **metadata · JSON-LD · sitemap은 그 목록에 없다** → §4 체크리스트로 사람이 확인한다.

| 자산 | 위치 | 개수 |
|---|---|---|
| GA4 핸들러 | `Header.tsx`(2) · `Footer.tsx`(1) · `AboutCta.tsx`(2) · `app/page.tsx`(1) · `app/contact/page.tsx`(1) | 7개 호출 지점 |
| JSON-LD | `app/layout.tsx` · `app/lab/[slug]/page.tsx` · `app/products/gulsori/page.tsx` · `app/products/wordtap/page.tsx` | 4파일 |
| `metadata` export | `layout` · `about` · `lab` · `privacy` · `products/gulsori` · `products/wordtap` | 6파일 |
| sitemap / robots | `app/sitemap.ts` · `app/robots.ts` | 2파일 |
| 법적 문구 | `app/privacy/page.tsx` (354행) | **문구 수정 금지. 레이아웃만** |

> `app/page.tsx`(홈)와 `app/contact/page.tsx`에는 `metadata` export가 없다. 홈은 `layout.tsx`가 덮고, contact는 `"use client"`라 export가 불가능한 **기존 상태**다. 리뉴얼이 만든 누락으로 오해하지 않는다.

### 1-6. 한글 본문과 copy 게이트가 충돌한다 ⚠️

Floor 게이트 **19(copy tells)** 가 금지하는 것 중에 **"em or en dashes"** 가 있고, Floor **63(template punctuation)** 은 **"meta strings joined with middle dots (`A · B · C`)"** 를 잡는다.

문제는 이 두 개가 **정상적인 한국어 표기**와 겹친다는 것이다.

- `직역·번역·문법 포인트` — 한국어 가운뎃점(열거)이다. 게이트 63이 보는 "구분자 가운뎃점"이 아니다
- `WordTap — AI 문법 해설 영어 학습 앱` — 제목의 em dash. 게이트 19는 **Floor라서 면제가 불가능하다**

문구를 지키는 레버는 하나뿐이다. **스탬프에 `copy: verbatim`을 넣으면 19·58·69가 note로 떨어진다**(`gates.md` §2: "Words the user insists on are material, not output"). 이걸 안 넣으면 Hallmark는 **우리 한국어 문구를 고쳐 쓴다** (`redesign.md`: 바뀐 줄을 handoff에 before/after로 전부 나열한다).

→ `design.md`와 매 런의 스탬프에 **`copy: verbatim`을 기본으로 둔다.** 문구 개선은 디자인 리뉴얼과 분리된 별도 작업으로 다룬다.
→ 단, 게이트 58(한 화면 80단어)과 69(같은 사실 반복)는 실제로 볼 만한 지적이므로 note로 받아 **사람이 판단**한다.

---

## 2. Phase 0 — 사전 준비

> npm/npx 명령의 실행 위치에 주의한다. 스킬은 **저장소 루트**(`skills-lock.json`·`.agent/`가 있는 곳), 앱 명령은 **`gonsuit/`** 에서 실행한다.

- [x] **Node 18+** — `v26.13.1` / npm `11.20.0` 설치 완료 (2026-11-27, `winget install OpenJS.NodeJS.LTS`)
  - Next.js 14.2.5 dev 서버가 Node 26에서 정상 기동함을 확인했다 (`✓ Ready in 2.1s`)
  - ⚠️ **셸 PATH 주의**: 설치 후에도 기존 셸 세션에는 PATH가 반영되지 않는다. 새 터미널을 열거나 `$env:PATH = [Environment]::GetEnvironmentVariable("PATH","Machine")`로 갱신한다
- [x] **Hallmark 설치** — `npx skills add nutlope/hallmark --agent claude-code` (저장소 루트에서 실행)
  - 설치 위치: `.claude/skills/hallmark` (6.8MB) · `skills-lock.json`에 commit `04977e1`로 기록됨
  - ⚠️ **이 세션에는 `/hallmark`가 로드되지 않는다.** 스킬은 세션 시작 시 로드되므로, 슬래시 명령을 쓰려면 **세션을 새로 시작**해야 한다. 그 전까지는 `scripts/sloplint.mjs`를 직접 실행하는 방식으로 쓴다
  - ⚠️ `.claude/`가 git에 추가된다(6.8MB). 커밋할지 `.gitignore`에 넣을지 결정 필요 — 커밋하면 다른 PC에서도 바로 쓸 수 있다(이 프로젝트의 크로스 머신 원칙에 부합)
- [x] **렌더 검사 도구** — `npm i -g puppeteer-core` 완료. Chrome은 `C:\Program Files\Google\Chrome\Application\chrome.exe`에 있다
  - ⚠️ 실행 시 `PUPPETEER_EXECUTABLE_PATH`에 위 경로를 지정해야 한다
- [x] **기준 스냅샷 확보** — `--render` 실행 시 `.hallmark/shots/`에 15장 자동 생성됨 (`/`·`/about`·`/products/wordtap` × 375 / 1280x800 / 1440x900 / 1440-full / 1920x1080). 루트 `.gitignore`에 `.hallmark/` 추가로 커밋 제외 처리
  - 남은 5개 페이지(`/contact`·`/lab`·`/lab/[slug]`·`/privacy`·`/products/gulsori`)는 확산 단계 진입 전에 같은 방식으로 추가 확보한다
- [ ] **작업 브랜치 생성** → verify: `git branch --show-current`가 `design/hallmark-renewal`
  - **Claude는 `git add`·`commit`·`push`를 하지 않는다** (CLAUDE.md 커밋 규칙). 브랜치 생성·커밋·푸시는 사람이 직접 한다
  - Vercel 프리뷰 배포로 before/after를 비교한다. `main`에는 §7 완료 조건을 통과한 뒤에만 머지한다
- [ ] (선택) `TOGETHER_API_KEY` → comp 신호 활성화

```powershell
node -v
```

```powershell
npx skills add nutlope/hallmark --agent claude-code
```

---

## 3. 실행 순서

### Phase 1 — audit (코드 변경 없음) ✅ 완료 2026-11-27

> `audit`은 프레임워크 프로젝트에서 **dev 서버가 떠 있어야 한다** (`--url`로 라우트를 기록한다. 디스크의 빈 셸 `index.html`은 렌더하지 않는다).

- [x] dev 서버 기동 후 `sloplint`를 3개 라우트에 실행 (명령·결과 → **§8**)
- [x] `.tsx` 파싱 확인 — Tailwind 클래스 문자열과 `cn/clsx/cva` 호출까지 읽는다. `file:line`이 정확하다
- [x] 코드 변경 0건 (`git status`에 소스 변경 없음)
- **중단 조건은 발동하지 않았다.** 지적이 구체적이고 `.tsx`를 정확히 읽으므로 **redesign 모드로 진행 가능**하다

**재실행 명령** (확산 단계에서 라우트를 바꿔 쓴다. ⚠️ **포트와 워밍업 주의 — §8-7을 먼저 읽는다**):

```powershell
$env:PATH = [Environment]::GetEnvironmentVariable("PATH","Machine"); $env:PUPPETEER_EXECUTABLE_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"; node .claude\skills\hallmark\scripts\sloplint.mjs gonsuit\src --genre editorial --render --url http://localhost:3000/
```

### Phase 2 — 방향 결정 ✅ §1 결정 완료 2026-11-27

> ⚠️ **`design.md`를 미리 쓰면 안 된다 — 이전 판의 절차가 틀렸다.**
> `design-md.md` 원문: `design.md`는 **scaffold가 `tokens.css`를 만든 뒤 그것으로부터** 쓰는 파일이다("written from `tokens.css`, never from the theme file"). 그리고 루트에 미리 존재하면 **"모든 깊이에서 시스템"** 이 되어 **테마가 색·타입을 고를 기회 자체가 사라진다.** 미리 쓰면 리뉴얼이 레이아웃 개선으로 쪼그라든다.
> 또한 Hallmark는 기존 `design.md`를 **덮어쓰지 않는다** ("Never overwrite… Exports refreshed, system unchanged").
>
> **착수 전 제약을 거는 올바른 자리:**
> 1. redesign 요청문의 "무엇이 남아야 하는가" (`redesign.md` § The ask)
> 2. 스탬프의 **`copy: verbatim`** — 한국어 문구 보호
> 3. 한글 폰트 지정 — `fonts.md`에 한글 face가 없으므로 우리가 명시해야 한다
>
> `design.md`는 **파일럿의 scaffold가 끝난 뒤, 2번째 페이지로 확산하기 직전에** `tokens.css`로부터 잠근다 (`redesign.md`: "More than one page at restyle or full: lock the system once the scaffold has run").

- [x] §1 결정 4건 확정 + 테마 = **Furrow** (장르 `modern-minimal`) → **§6 결정 기록**
- [ ] **redesign 요청문 준비.** 아래를 그대로 담는다 (`design.md` 대신 여기에 건다)
  - `copy: verbatim` — 한국어 문구 수정 금지
  - 한글 폰트: 본문 Pretendard + 제목은 테마 확정과 함께
  - 다크모드 제거
  - "숫자 주장(2주 MVP·99개 트렌드 등)은 실제 값이다. 삭제·수정 금지"
  - 보존 자산 (§1-5) — GA4 핸들러 7곳 · JSON-LD 4파일 · metadata 6파일 · sitemap
  - `privacy/page.tsx`는 문구 수정 금지, 레이아웃만
- [x] **토큰 (A) 전환** ✅ 2026-11-27 — `color-mix()` + `<alpha-value>` 방식. 상세와 함정은 §1-1
  - verify: `npm run build` 통과 + `sloplint --render` 게이트 결과 전환 전과 동일 (대비 게이트 신규 0건)
- [x] **다크모드 제거** ✅ 2026-11-27 — `tailwind.config.js`의 `darkMode: ["class"]`, `globals.css`의 `.dark` 블록 45줄, `privacy/page.tsx`의 `dark:prose-invert`·`dark:bg-amber-950/30`
  - 착수 전 확인: **`.dark` 클래스를 붙이는 코드가 저장소에 하나도 없었다** (테마 프로바이더·토글·`next-themes` 전부 없음). 도달 불가능한 죽은 코드였다
  - verify: 빌드 통과 + `sloplint --render` 결과가 **(A) 전환 이전 기준선과 완전히 동일** (21 FAIL / 20 REFLEX / 18 WARN)
  - 남겨 둔 것: `layout.tsx:55`의 `suppressHydrationWarning` — 테마 프로바이더용 잔재로 보이나 다른 이유(브라우저 확장)로도 쓰이므로 건드리지 않았다. `:root`의 `--sidebar-*` 토큰도 다크모드가 아니라 원래 어두운 사이드바용이라 유지

### Phase 3 — 파일럿 1페이지 ✅ 완료 2026-11-27 → **핸드오프는 §9**

**`/about`부터 한다.** 247행, metadata 1개 + GA4 2개, JSON-LD 없음 → 폭발 반경이 가장 작으면서 배선 보존 여부를 볼 수 있다.

- [ ] `sloplint --before`로 현 상태 기록 → verify: before 기록이 생성됨
- [ ] `/hallmark redesign ./src/app/about` (처음에는 **"keep the layout"** 수정자를 붙여 스타일만 바꿔 본다)
- [ ] `sloplint --kept` → verify: 통과 (링크·필드·핸들러·헤딩 누락 없음)
- [ ] §4 체크리스트 수행
- [ ] `npm run build` → verify: 에러 0
- [ ] Vercel 프리뷰에서 before/after 비교
- **verify(종합)**: 빌드 통과 + §4 전항목 OK + 사람이 보기에 개선됐다
- **중단 조건**: `.tsx` 구조가 깨지거나 배선이 날아가면 브랜치를 버리고 §1-1의 (B)로 전환

### Phase 4 — 확산 (한 페이지씩, 한 커밋씩)

파일럿이 통과한 뒤에만. **한 번에 한 페이지.** 각 페이지마다 Phase 3 절차(before → redesign → kept → §4 → build)를 그대로 반복한다.

권장 순서 — 위험이 낮은 것부터, 가치가 큰 것을 마지막에:

1. [x] `/products/wordtap` (JSON-LD 보존을 처음 검증. 출시예정이라 트래픽 영향 작음) — 완료 2026-11-27
2. [x] `/products/gulsori` (운영중 — JSON-LD 평점 정책 주석 블록 보존 확인) — 완료 2026-11-27
3. [ ] `/lab`, `/lab/[slug]`
4. [ ] `/contact` (`"use client"` + 폼 + Supabase/Resend 배선 — 필드 누락이 가장 치명적)
5. [ ] `/privacy` (레이아웃만. 문구 diff가 0이어야 한다)
6. [ ] `Header.tsx` / `Footer.tsx` (전 페이지 영향 — 개별 페이지가 끝난 뒤에)
7. [ ] `/` 홈 (가장 가치가 크고 가장 위험하다. 마지막)

### Phase 5 — 마감

- [ ] 전체 페이지 `npm run build` 통과
- [ ] GA4 실시간 보고서에서 `menu_click` · `product_click` · `cta_click` · `contact_submit` 실제 수신 확인
- [ ] Google Rich Results Test로 JSON-LD 4건 검증
- [ ] `sitemap.xml` · `robots.txt` 정상 생성 확인
- [ ] 문의 폼 실제 발송 테스트 (Supabase 저장 + Resend 메일 수신)
- [ ] `CLAUDE.md` 갱신 — 현재 작업 상태 스냅샷, 토큰 체계가 바뀌었다면 "기술 스택"·"코딩 컨벤션"도. **같은 커밋에 넣는다**
- [ ] 이 문서 상단에 ✅ 완료 표기 후 동결, §6에 결정 사항 기록
- [ ] 사람이 `main`에 머지 → Vercel 자동 배포

---

## 4. 페이지별 보존 체크리스트 (복붙용)

각 페이지 redesign 직후 이 블록을 수행한다.

```
□ GA4: 해당 페이지의 track* 호출이 전부 남아 있다 (import + onClick 양쪽)
□ JSON-LD: application/ld+json 블록과 필드가 그대로다
□ metadata: title / description / canonical / openGraph / twitter 전부 남아 있다
□ h1은 페이지당 1개
□ 모든 Image 컴포넌트에 alt
□ 내부 링크 1개 이상, 외부 링크에 target="_blank" rel="noopener noreferrer"
□ 본문 텍스트 diff = 0 (디자인 리뉴얼은 문구를 바꾸지 않는다)
□ 하드코딩 색상 없음 — 토큰만 사용
□ 모바일(375px)에서 가로 스크롤 없음
□ npm run build 에러 0
```

확인 명령:

```powershell
git diff -U0 -- "*.tsx" | Select-String "track|ld\+json|metadata|canonical"
```

---

## 5. 되돌리기

- 작업은 `design/hallmark-renewal` 브랜치에서만. `main`은 항상 배포 가능한 상태로 둔다
- 페이지 하나 = 커밋 하나 → 문제가 생긴 페이지만 `git revert`
- Hallmark는 `.hallmark/log.json`에 빌드 이력을 남긴다. 어떤 테마로 무엇을 만들었는지는 여기서 확인
- 최악의 경우: 브랜치 삭제. `main`에는 아무 영향이 없다

---

## 6. 결정 기록 (작업하며 채운다)

| 날짜 | 결정 | 이유 |
|---|---|---|
| 2026-11-27 | Hallmark 설치 위치 = **프로젝트** (`.claude/skills/hallmark`) | 기존 vercel-labs 스킬과 같은 방식. 커밋하면 다른 PC에서 바로 쓸 수 있다 |
| 2026-11-27 | 토큰 소유자 = **(A) 전환** ✅ **완료** (§1-1) | `tailwind.config.js`의 `hsl()` 래핑을 걷어내고 shadcn 변수를 Hallmark 토큰에 매핑한다(`export-formats.md`의 공식 경로). 색 토큰 23개를 한 커밋으로 처리한 뒤 그 위에서 파일럿을 돌린다 — 파일럿의 색 작업을 두 번 하지 않기 위해 |
| 2026-11-27 | 한글 폰트 = **본문 Pretendard + 제목 한글 세리프** | 이 사이트의 제목은 대부분 한국어라, 테마가 라틴 face를 골라도 한글 제목은 폴백으로 떨어져 테마 성격이 드러나지 않는다. 한글 디스플레이를 직접 지정해야 editorial 성격이 한글에서 실제로 구현된다 (⚠️ 테마 선택과 함께 재확인 — 아래 "미결" 참조) |
| 2026-11-27 | 다크모드 = **제거** ✅ **완료** | `.dark` 토큰은 다 있는데 `dark:` 클래스는 `privacy` 2곳뿐. 사실상 미사용이고, 유지하면 `dark-mode.md`의 parity 방식(전 토큰 재유도 + 양 모드 게이트 전수 검사)이 필요해 작업량이 두 배가 된다. 나중에 제대로 도입한다 |
| 2026-11-27 | 문구 = **`copy: verbatim` 기본 적용** | 게이트 19(em/en dash)·63(가운뎃점)이 정상적인 한국어 표기와 충돌한다(§1-6, `privacy:130`에서 실제 발생). 19는 Floor라 면제가 불가능하므로 스탬프가 유일한 레버다. 58·69 지적은 note로 받아 사람이 판단 |
| 2026-11-27 | 장르 = **modern-minimal** (deal은 `editorial`로 돌렸으나 고른 테마의 실제 장르) | `theme.mjs deal --genre editorial` seed `korean-micro-saas-studio-hub-33ed·161d678c·2026-11-27·r0` → 3안 중 Furrow 선택. Furrow의 frontmatter 장르가 `modern-minimal`이므로 이후 `sloplint --genre`도 `modern-minimal`로 돌린다 |

| 2026-11-27 | 테마 = **Coral** (Furrow에서 변경) | 첫 deal의 프롬프트("micro-SaaS studio hub, 의뢰 받기")가 이 사이트의 성격을 잘못 잡았다. 실제로는 **자사 제품을 알리는 회사 홈페이지**다. 프롬프트를 고쳐 `modern-minimal`로 다시 뽑아(seed `software-company-homepage-showing-1f68·161d678c·2026-11-27·r0`) Blueprint·Coral·Ultraviolet 중 Coral 선택. 이유: ① 액센트를 꽉 채우지 않고 아껴 써서(`코랄은 눌린 상태·링크 밑줄·포커스에만`) **상품 카드 여러 개가 서로 싸우지 않는다** ② 재료가 "제품이 내놓는 것들을 실물처럼" 이라 앱 아이콘·스크린샷이 그대로 쓰인다 ③ 디스플레이가 평범한 그로테스크(General Sans)라 **한글(Pretendard 800)로 자연스럽게 치환된다** — Blueprint(대문자)·Ultraviolet(소문자)은 한글에 없는 라틴 장치라 제목 목소리가 전달되지 않는다 ④ Do-nots에 "종이를 사진으로 쓰지 말 것, CSS로 만들 것"이 있어 사진 에셋이 필요 없다 |
| ~~2026-11-27~~ | ~~테마 = Furrow~~ (폐기) | 3안(Loom·Hedgerow·Furrow) 중 **유일한 소프트웨어 제품 페이지**다. 나머지 둘은 재료가 직물 사진·풍경 사진이라 우리에게 대신 채울 이미지가 없어 게이트 81(빈 그림)·83(사진 벽) 위험이 있다. Furrow는 재료가 "실제 제품 화면"이라 글소리·WordTap 스크린샷과 Trend Scouter 화면이 그대로 재료가 되고, 게이트 84(가짜 제품)가 자연히 해결된다 |
| 2026-11-27 | 제목 한글 폰트 = **굵은 한글 산세** (세리프에서 변경) | Furrow의 디스플레이가 Red Hat Display 600 그로테스크다. 위 "제목 한글 세리프" 결정의 목적은 "한글에서도 테마 성격이 드러나게"였고, Furrow는 그 성격을 세리프가 아니라 **종이색·moulded 키·mono 숫자**로 낸다. 따라서 제목은 Pretendard 800 등 굵은 한글 산세로 간다 |

**⚠️ Furrow 적용 시 주의 — 테마 파일을 읽고 확인한 사실**

- **Furrow의 frontmatter 장르는 `editorial`이 아니라 `modern-minimal`이다.** `deal`은 "fits: working" 키워드로 뽑았다. 장르 결정을 `modern-minimal`로 정정한다
- **키워드가 전부 농업이다** (farm, livestock, hectares, inspection…). 테마의 시그니처 재료는 **"생성된 측량 지도"와 "방수 노트 페이지"** 다 — 우리에게 해당 없음
- **가져올 것**: warm manila 종이(`--color-paper: oklch(96% 0.011 85)`), 거의 검은 잉크, 그로테스크 디스플레이, **mono 숫자를 재료로**(날짜·건수·버전 등 "옮겨 적는 값"), moulded 6px 키, 탄제린 시그널 하나(`oklch(70% 0.19 40)`), 유효한 것에 녹색
- **버릴 것**: 측량 지도 히어로, 농업 어휘. 그 자리에 **실제 앱 화면**이 들어간다
- 폰트 실무: Red Hat Display/Text/Mono는 한글이 없다. 본문 Pretendard, 제목 굵은 한글 산세, **숫자·영문은 Red Hat Mono/Text 유지**(mono 숫자가 이 테마의 성격이다)

### 틀렸던 것 (다음 사람을 위한 경고)

| 시도 | 결과 | 교훈 |
|---|---|---|
| | | |

---

## 7. 완료 조건

1. 8개 페이지 전부가 새 디자인으로 바뀌었고 `npm run build`가 통과한다
2. GA4 이벤트 4종이 실제로 수신된다
3. JSON-LD 4건이 Rich Results Test를 통과한다
4. 모든 페이지의 metadata(canonical·OG·Twitter)가 보존됐다
5. 본문 문구 diff가 0이다 (`privacy` 포함)
6. `CLAUDE.md` 현재값이 갱신됐다
7. 이 문서가 동결됐다

---

## 8. Phase 1 audit 결과 (2026-11-27 · 실제 도구 실행)

실행한 명령 (저장소 루트, `PATH`에 Node 추가 · `PUPPETEER_EXECUTABLE_PATH` 지정):

```powershell
node .claude\skills\hallmark\scripts\sloplint.mjs gonsuit\src --genre editorial --render --url http://localhost:3000/ --url http://localhost:3000/about --url http://localhost:3000/products/wordtap
```

**결과: `29 FAIL · 20 REFLEX · 18 WARN` (13 파일 · 3 URL)**

> 렌더 계층은 `/`·`/about`·`/products/wordtap` 3개 라우트만 돌렸다. 나머지 5개 페이지는 정적 계층만 검사됐다.
> `sloplint`는 `.tsx`의 Tailwind 클래스 문자열과 `cn/clsx/cva` 호출까지 읽는다 — 확인됨.

### 8-1. 접근성 — ✅ **26a·40·41 수정 완료 (§8-6)**

| 게이트 | 위치 | 내용 |
|---|---|---|
| **26a** FAIL | `globals.css` | **`:focus-visible` 정의가 사이트 전체에 하나도 없다.** 키보드 사용자가 포커스 위치를 알 수 없다 |
| **41** FAIL | wordtap `Google Play 출시 예정` 버튼 | 버튼 텍스트 대비 **1.39:1** — 사실상 읽을 수 없다 |
| **40** FAIL ×5 | wordtap `구글 번역 (기존)` 3.76:1 / `2차 정식` 4.40:1 / 본문 2곳 4.44:1 · 홈 `Android 앱` 태그 4.40:1 | 기준 4.5:1 미달 |
| **26b** REFLEX | 전역 | `:active`·`:disabled` 스타일 없음 |

### 8-2. Floor FAIL — 정적 계층

| 게이트 | 위치 | 내용 |
|---|---|---|
| 10a | `page.tsx:208,277,284` · `contact:163` · `lab:68` | `transition-all` 5곳 |
| 27 | `page.tsx:277` | `hover:scale`에 `motion-reduce:`/`motion-safe:` 대안 없음 |
| 30a | `wordtap:85-87` 💼📝📖 · `gulsori:88-90` 👓📖🎧 | **이모지를 아이콘으로 사용** (6곳) |
| 54 | `about:198` `진행 중` · `lab/[slug]:86` | 이브로우 |
| 67 | `lab:76` · `lab/[slug]:86` | **대문자 10px + 자간 0.05em 라벨** (house rule) |
| 19 | `privacy:59` `—` · `gulsori:186` `–` | 본문의 대시 |
| 63 | `privacy:130` | 가운뎃점 메타 문자열 — **§1-6의 한국어 오탐이 실제로 확인됨** |
| 48 | `globals.css:112` | `font-family: 'Inter', sans-serif` 리터럴이 토큰 밖에 있다 |
| 34 | `globals.css` | `html`·`body`에 `overflow-x: clip` 없음 |
| 20 | `globals.css:1` | Hallmark 스탬프 없음 (미적용 상태이므로 당연) |

### 8-3. 렌더 계층 — 레이아웃과 모바일

- **44c** `/about` hero가 900px 화면에서 **636px**에서 끝남 · `/products/wordtap` **632px** → 첫 화면에 빈 띠가 남는다
- **77** 얇은 섹션 — 홈 1개(`함께 혁신을…` 52% 폭) · `/about` 2개(`Roadmap` 60%, CTA 45%) · wordtap 4개
- **78** 섹션 제목이 **30~36px**인데 hero 제목은 48~60px → 위계가 무너져 있다
- **81** `/about`에 **빈 그림** 1개 — 518×388 그라디언트 안에 아무것도 없다
- **49b** 320px에서 헤더 `개발 상품`, 푸터 `개인정보처리방침`이 **2줄로 깨진다** (3개 라우트 전부)
- **39b** 홈 버튼 높이 58px (권장 44~52px)
- **3** wordtap 피처 카드 — 아이콘-위-제목 등폭 그리드
- **F20** 홈 서비스 그리드 `3+3+1`, wordtap `2+2+1` — 마지막 줄에 1개만 남는다 (홈 상품이 7개라서)
- **F19** 본문에 font-weight 4종(400·500·600·700) 사용 — 권장 3종
- **F26** 375px에서 한국어 h2·h3가 **마지막 줄에 한 조각만 남는다** (`AI 해설, 무료로 사용하는 법`, `출시 소식을 가장…`, `/about` h3 3개) → 한글 줄바꿈 문제, §1-3과 직결
- **29** WARN — 블러 구체 4곳(`page:138`, `wordtap:137`, `gulsori:137`, `about:100`) · 글래스 헤더(`Header:18`)
- **74** WARN — Tailwind 기본 팔레트 직접 사용: wordtap 14종 · gulsori 9종 · about 6종
- **2b** REFLEX — 그라디언트 텍스트 `from-primary to-indigo-400` (`page:149`, `about:109`)
- **19** WARN — `Footer:50` `All rights reserved`

### 8-4. 어제 수동 추정 중 도구가 확인해 주지 않은 것 (기록)

정확성을 위해 남긴다. 아래는 **내가 과잉 지적했거나 틀린 것**이다.

- **2a(Floor)로 본 그라디언트 텍스트 → 실제로는 2b(REFLEX)** 다. 면제 가능한 등급이다
- **홈의 `Build in Public ·` 알약을 이브로우(54)로 봤으나 도구는 잡지 않았다.** 실제 54는 `about:198`과 `lab/[slug]:86`이다
- **홈 지표(`100%` 고객 만족도 등)를 46a로 봤으나 도구는 잡지 않았다.** 46a는 판단(J) 게이트라 스크립트가 settle하지 못한다 → 사람이 §8-5로 판단
- **58·8·6b·42·1(Inter as display)도 도구 출력에 없다.** J/R 게이트이거나 렌더 판단 대상이다. 미해결 문항으로 남는다
- **67(대문자 자간 라벨)은 "없다"고 적었는데 틀렸다.** `lab:76`·`lab/[slug]:86`에 실재한다
- **26b(`:active`/`:disabled` 없음)는 놓쳤다**


### 8-5. Hallmark와 무관하게 판단이 필요한 것

1. **죽은 버튼 2개** — 핸들러도 `href`도 없다
   - `app/page.tsx:284-287` `고앤슈트 소개서 보기` (CLAUDE.md의 CTA GA4 규칙 `cta_click`도 누락)
   - `components/Header.tsx:44-48` `KR / EN` — 다국어 미구현
2. **`100% 고객 만족도`** (`app/page.tsx:182`) — 측정값인가? 아니라면 게이트 이전에 표시 광고 문제다
3. **홈 전체가 `"use client"`** — `onClick` 하나 때문이다. 그래서 이 페이지는 `metadata`를 가질 수 없다. 카드만 분리하면 Server Component로 되돌릴 수 있다
4. **`.env.local`이 git에 추적되고 있다** (`ce91fa7`에서 커밋) — 담긴 값은 `NEXT_PUBLIC_SUPABASE_URL`·`NEXT_PUBLIC_SUPABASE_ANON_KEY` 둘 다 **공개 전제 값이라 유출은 아니다.** `RESEND_API_KEY`는 들어 있지 않다. 다만 CLAUDE.md의 "`.env` 파일은 절대 커밋하지 않는다" 규칙에 어긋나고, 앞으로 비밀값을 여기 추가하면 그대로 새어 나간다 → `git rm --cached .env.local` 권장 (루트 `.gitignore`는 2026-11-27에 신규 생성)
5. **미사용 import** — `app/page.tsx:9` `Zap` (기존 코드, 이번 범위 아님)

### 8-6. 접근성 FAIL 수정 — 완료 2026-11-27 (리뉴얼과 분리 처리)

§8-1의 접근성 FAIL은 디자인 결정과 무관하므로 리뉴얼을 기다리지 않고 먼저 고쳤다.

**바꾼 것 (2파일)**

> ⚠️ **2026-11-27 갱신**: 아래 WordTap 비활성 버튼 수정은 **무효가 됐다.** 원격 커밋 `e2a5883`(2026-10-30, WordTap 플레이스토어 출시 반영)이 그 버튼을 실제 다운로드 링크로 교체했기 때문이다. pull 이후 `text-red-500 → red-600`만 새 코드에 다시 적용했고, audit을 재실행해 **현재 코드 기준 21 FAIL / 20 REFLEX / 18 WARN**으로 동일함을 확인했다. §8-8 참조.

| 파일 | 변경 | 해결한 게이트 |
|---|---|---|
| `globals.css` | `--muted-foreground` **46.1% → 43%** | 40 ×6 (대비 4.40~4.44:1 → 기준 통과). `bg-muted`·`bg-blue-50`·`bg-muted/30` 위의 모든 인스턴스가 한 줄로 해결됨 |
| `globals.css` | `:focus-visible { outline: 2px solid hsl(var(--ring)); outline-offset: 2px }` 신규 | 26a. 링 대비는 흰 배경 대비 약 6.1:1 (기준 3:1) |
| `globals.css` | `html, body { overflow-x: clip }` 신규 | 34. **`hidden`이 아니라 `clip`** — `clip`은 스크롤 컨테이너를 만들지 않아 Header의 `position: sticky`가 유지된다 (게이트가 권하는 값) |
| `wordtap/page.tsx:198` | 비활성 버튼 `bg-primary/40 + text-primary-foreground + opacity-60` → `border border-border bg-muted text-muted-foreground` | 41 (**1.39:1** → 통과). 비활성 채널은 `cursor-not-allowed` + 네이티브 `disabled` + 별도 표면색으로 유지 → 게이트 39a 계속 통과 |
| `wordtap/page.tsx:222` | `text-red-500` → `text-red-600` | 40 (3.76:1 → 약 4.8:1) |

**결과: 29 FAIL → 21 FAIL** (게이트 34 ×1 · 40 ×6 · 41 ×1 제거, 신규 발생 0). 게이트 26a는 `globals.css`를 검사 범위에 포함했을 때 사라짐을 별도 확인. `npm run build` 통과.

**일부러 남긴 것**

- **26b**(`:active`·`:disabled` 스타일 없음) — Reflex 등급이고, 전역 `:active` 스타일은 사이트 전체 인터랙션 느낌을 바꾸는 **디자인 결정**이다. 접근성 FAIL이 아니므로 리뉴얼에서 다룬다
- **49b**(320px에서 `개발 상품`·`개인정보처리방침` 2줄 깨짐) — 문구나 레이아웃을 바꿔야 하므로 리뉴얼 범위
- 다크모드 토큰(`.dark`의 `--muted-foreground`)은 건드리지 않았다. 다크모드는 사실상 미사용이고(§1-4) audit도 라이트 모드만 돌렸다

### 8-7. ⚠️ 검증할 때 밟은 함정 — 다음에 같은 실수를 하지 않도록

**dev 서버 좀비 프로세스 때문에 수정 전 서버를 보고 "통과"로 오판했다.**

1. 배경 실행한 `npm run dev`를 중단해도 **`next dev` 자식 프로세스가 포트를 계속 점유**한다
2. 새로 띄운 서버는 조용히 **다음 포트(3001, 3002…)로 옮겨간다** — 로그에 `⚠ Port 3000 is in use` 한 줄만 남는다
3. 그래서 `--url http://localhost:3000`은 **수정 전 코드를 서빙하는 좀비**를 가리켰고, 새 CSS 경로는 404가 되어 스타일 없이 렌더됐다
4. 스타일 없는 캡처에서는 `44d`(hero text 8px from edge)·`73`(text under image) 같은 **유령 FAIL이 새로 생기고**, `49b`·`81`·`F19`·`F20` 같은 실제 발견은 **사라진다**

**반드시 지킬 것**

- 렌더 검사 후 **`WARN render` 건수를 먼저 본다.** `the shots show a fallback: fonts or stylesheets did not load`가 있으면 그 실행 결과는 **전부 버린다.** Hallmark 문서도 "never review or sign off a fallback face"라고 못 박는다
- dev 로그에서 **실제 포트를 읽어** `--url`에 쓴다. 3000이라고 가정하지 않는다
- 검사 전에 **대상 라우트를 전부 `curl`로 워밍업**한다. Next dev는 요청이 올 때 컴파일하므로 첫 캡처가 미완성 상태를 찍을 수 있다


### 8-8. ⚠️ 낡은 로컬 저장소에서 작업했다 — 2026-11-27

**Phase 0~2 전체가 원격보다 1커밋 뒤처진 상태에서 진행됐다.**

원격에 `e2a5883 feat: WordTap 구글 플레이스토어 상용 배포 반영 및 다운로드 링크 연동`(2026-10-30)이 있었는데 로컬에 당겨오지 않은 채로 작업을 시작했다. 그 커밋은 `products/wordtap/page.tsx`와 `page.tsx`를 다시 썼다.

**그래서 생긴 일**

- **WordTap 비활성 버튼 대비 수정(1.39:1)이 무효가 됐다.** 원격에서 그 버튼은 이미 실제 Play Store 링크로 교체돼 있었다. 사라진 코드를 고친 셈
- `CLAUDE.md`의 상품 표가 WordTap을 `출시예정`으로, "다음 할 일 1번"을 *WordTap Play Store 출시*로 적고 있었다. 실제로는 한 달 전에 출시됨 — **낡은 현재값 위에 리뉴얼 내용을 덧붙이고 있었다**
- §8의 WordTap 측정값이 교체 전 코드 기준이었다

**복구 절차 (기록용)**

1. 내 wordtap 수정을 백업 후 `git checkout --`로 되돌림 → pull이 건드릴 파일 2개를 깨끗하게 만듦
2. `git pull` — 로컬 커밋이 0개라 **fast-forward**. stash 불필요, 충돌 없음
3. `text-red-500 → red-600`만 새 코드에 재적용 (이 지적은 새 코드에도 유효)
4. `CLAUDE.md` 상품 표·다음 할 일을 출시 완료로 정정
5. audit 재실행 → **21 FAIL / 20 REFLEX / 18 WARN, pull 이전과 동일**. 빌드 통과

**교훈 — 세션 시작 시 할 것**

`CLAUDE.md`의 "현재 작업 상태"를 읽기 전에 **`git fetch && git status -sb`로 원격과의 차이를 먼저 본다.** 이 프로젝트는 여러 PC에서 작업하므로 로컬 `CLAUDE.md`가 최신 현재값이라는 보장이 없다. 문서 규약의 "현재값은 CLAUDE.md가 소유한다"는 **동기화된 저장소**를 전제한다.

### 8-9. pull로 들어온 코드에서 발견한 것

- **WordTap Play Store 링크 2곳에 GA4 `external_link_click`이 없다** (`products/wordtap/page.tsx:210`, `:393`). CLAUDE.md의 GA4 규칙은 외부 링크를 추적 대상으로 명시한다. 출시 앱의 다운로드 전환을 측정하지 못하고 있다 → `CLAUDE.md` "다음 할 일"에 올려 둠
- 잘 되어 있는 것: `target="_blank" rel="noopener noreferrer"` 적용, `transition-opacity`(게이트 10a 회피), JSON-LD에 `downloadUrl`·`installUrl` 반영, `aggregateRating`은 평점 발생 전이라 넣지 않음 — 프로젝트의 평점 스키마 정책 그대로다

---

## 9. Phase 3 파일럿 핸드오프 — `/about` restyle (2026-11-27)

```
Redesign · restyle · 1 page (/about) · theme Coral (deal 2/3)
Before    1 FAIL · 7 REFLEX   (게이트 54 이브로우, 2b 그라디언트 텍스트, 29 블러 구체, 78 섹션 제목)
After     0 FAIL · 5 REFLEX
Kept      링크 6/6 · 헤딩 12/12 · 피규어 2/2 · GA4 핸들러 2/2 · metadata 3종
Changed   시스템만 (색·타입·모서리·그림자·컨트롤). 레이아웃은 그대로
Dropped   "진행 중" 알약의 시각 텍스트 1건 — 아래 참조
Compare   .hallmark/compare.html
```

### 9-1. 적용 방식 — 페이지 범위 한정

전체 사이트가 아니라 **`/about`에만** Coral을 걸었다. 다른 7개 페이지는 Indigo 그대로다.

- `tokens.css`는 전역 import하되 **변수를 정의만** 하므로 다른 페이지에 영향이 없다
- `base.css`는 **import하지 않았다** — 전역 요소 규칙(h1 크기 등)이라 다른 페이지를 움직인다
- shadcn 토큰 매핑과 Coral 전용 클래스를 **`[data-hallmark="coral"]` 아래로 범위 한정**하고, `/about`의 루트 div에만 그 속성을 붙였다
- 확산할 때는 이 블록을 `:root`로 올리고 속성을 지우면 된다

**핵심 결정**: shadcn `--primary`를 **산호색이 아니라 ink board**(`--color-board`)에 매핑했다. Coral의 Do-not이 "코랄은 띠·배경·제목에 쓰지 않는다. 눌린 상태·링크 밑줄·포커스에만"이라고 못 박기 때문이다. `--primary: var(--color-accent)`로 했다면 사이트 전체가 테마 규칙을 위반했을 것이다.

### 9-2. 실제로 바뀐 것

| 전 | 후 | 근거 |
|---|---|---|
| 인디고 그라디언트 제목 | 한 가지 잉크, 강조는 무게로 | 게이트 2b |
| 떠 있는 블러 구체 + 그라디언트 워시 | 종이 단계(paper → paper-2)로 깊이 | 게이트 29 |
| h3 앞 "진행 중" 알약 | 마커의 산호색 + `aria-label` | 게이트 54 (Floor) |
| 섹션 제목 30px | `--text-section` (1440에서 약 52px) | 게이트 78 |
| 꽉 찬 `bg-primary` 버튼 | letterpress 코튼 카드 / ink board | Coral § Controls |
| 분기 표기 `2026 Q1` | Geist Mono, tabular | Coral § Type |
| Tailwind 팔레트 직접 사용 6종 | 토큰 | 게이트 74 |

### 9-3. 손으로 잡아야 했던 것 — 도구가 못 잡은 것들

1. **GA4 핸들러를 `--kept`가 지켜주지 않는다.** `--before`가 `handlers: 0`으로 기록했다. `/about`의 GA4는 `components/AboutCta.tsx`에 있어 대상 경로 밖이고, React `onClick`은 인라인 핸들러가 아니라서다. **§1-5의 예측이 그대로 맞았다.** 사람이 확인해야 한다
2. **한글 단어 중간 줄바꿈.** 제목을 키우자 CTA 제목이 `만들어 / 갈`로 끊겼다. 한글은 하이픈이 없어 기본값이 단어 중간을 끊는다 → `word-break: keep-all`을 범위 블록에 넣었다. 게이트 F26과 49b가 함께 줄었다
3. **`cotton.svg` / `felt.svg` 누락으로 빌드 실패.** scaffold가 생성한 `tokens.css`가 텍스처 SVG 2개를 참조하는데 스킬이 그 파일을 제공하지 않아 webpack이 멈춘다. 두 변수를 주석 처리했다 — 쓰지 않고, `texture.md`도 "modern-minimal 페이지에 grain을 쓰지 말 것"이라 한다
4. **게이트 27의 가짜 통과.** `base.css`에 reduced-motion 폴백이 있어 sloplint가 통과로 읽었는데, **그 파일을 import하지 않았으므로 런타임에는 적용되지 않았다.** sloplint는 import 여부를 보지 않고 디렉토리의 CSS를 스캔한다. `globals.css`에 직접 넣어 진짜 통과로 만들었다

### 9-4. 남은 REFLEX 5건 — 레이아웃이라 restyle로는 못 고친다

| 게이트 | 내용 |
|---|---|
| 44c | 히어로가 900px 화면에서 636px에 끝남 |
| 79 | 히어로 마지막 콘텐츠와 다음 섹션 사이 225px 공백 — **블러 구체를 걷어내자 드러난 것** |
| 77 | Roadmap 섹션이 폭의 57% |
| 49b | 320px에서 헤더 `개발 상품`이 2줄 |
| 81 | 518×388 빈 그라디언트 |

전부 `full` 깊이가 settle하는 항목이다. restyle은 레이아웃을 건드리지 않기로 한 약속이므로 남겨 둔다.

### 9-5. 알아 둘 것

- **헤더·푸터가 `/about`에서만 다르게 보인다.** 공통 컴포넌트가 범위 안에 들어가 ink 계열로 렌더된다. 파일럿의 의도된 상태이고, 확산하면 사라진다
- **폰트 패밀리가 4개**(Inter·Pretendard·General Sans·Geist Mono)다. 파일럿 동안 두 시스템이 공존해서고, 전면 전환 때 Inter가 빠지면 해소된다
- **스탬프를 아직 넣지 않았다.** 게이트 20이 1 FAIL로 계속 잡힌다. `globals.css`는 아직 사이트 전체의 스타일시트라 Hallmark 빌드라고 선언하면 거짓이 된다. 전면 전환 때 넣는다
- 전체 사이트 기준 **21 FAIL → 19 FAIL**, REFLEX 20 → 17, WARN 18 → 15
