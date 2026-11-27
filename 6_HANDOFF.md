# 6_HANDOFF.md — 다른 AI 에이전트로 이어받기

> **이 문서는 진입 가이드다.** 내용을 담지 않고 **어디를 읽을지**와 **밟으면 시간을 날리는 것**만 적는다.
> 현재값은 `CLAUDE.md`가, 리뉴얼 작업의 전모는 `5_DESIGN_RENEWAL.md`가 소유한다. 여기서 반복하지 않는다.
>
> 작성 2026-11-27 · 기준 커밋 `4571631`

---

## 0. 30초 요약

**고앤슈트(gonsuit.com) 회사 홈페이지의 디자인 리뉴얼을 Hallmark로 진행 중이다.**

- Hallmark = 디자인 에이전트 스킬. 이미 `.claude/skills/hallmark`에 설치돼 있고 **git에 커밋돼 있다**(별도 설치 불필요)
- 테마는 **Coral**로 확정. `/about` 한 페이지에 `restyle` 깊이로 적용해 **배포까지 끝났다**
- 나머지 7개 페이지는 아직 기존 Indigo 그대로다
- **지금 멈춰 있는 이유**: 사람(Gon)이 `/about` 결과를 눈으로 보고 확산 여부를 판단하는 중

---

## 1. 읽는 순서

이 순서를 지키면 20분 안에 따라잡는다. 건너뛰면 이미 내린 결정을 다시 뒤집게 된다.

| 순서 | 문서 | 무엇을 얻나 | 분량 |
|---|---|---|---|
| 1 | `CLAUDE.md` | 프로젝트 전체 현재값. **"현재 작업 상태"와 "다음 할 일"만 먼저** | 418줄 |
| 2 | `5_DESIGN_RENEWAL.md` **§6** | 왜 지금 이 선택을 하고 있는지 — 결정 7건과 각각의 근거 | 40줄 |
| 3 | `5_DESIGN_RENEWAL.md` **§9** | `/about` 파일럿이 실제로 무엇을 어떻게 바꿨는지 | 60줄 |
| 4 | `5_DESIGN_RENEWAL.md` **§8-7, §8-8** | 이전 세션이 실제로 밟은 함정 2건 | 30줄 |
| 5 | `5_DESIGN_RENEWAL.md` §0~§3 | 절차 전체 (확산 단계에 들어갈 때 읽으면 된다) | 250줄 |

`1_PRD.md`(제품 요구사항)·`4_LRP.md`(장기 로드맵)는 리뉴얼 작업에는 필요 없다. `2_PDP.md`는 1차 런칭 완료로 **동결**된 문서다 — 거기 있는 미완료 체크박스를 현재 할 일로 오해하지 말 것.

---

## 2. 세션 시작 의례 ⚠️ 반드시

```powershell
git fetch; git status -sb
```

**로컬이 뒤처져 있으면 pull부터 한다.** 이 프로젝트는 여러 PC에서 작업한다. 이전 세션이 한 달 묵은 로컬 위에서 작업하다 사고를 냈다(`5_DESIGN_RENEWAL.md` §8-8). `CLAUDE.md`의 "현재값"은 저장소가 동기화돼 있다는 전제 위에서만 맞다.

---

## 3. 재개 지점

**사람의 판단을 기다리는 중이다.** 묻지 않고 확산하지 말 것.

판단 결과에 따라 갈래가 넷이다.

| 사람의 답 | 할 일 |
|---|---|
| "좋다, 확산" | `5_DESIGN_RENEWAL.md` §3 Phase 4 순서대로. **한 번에 한 페이지, 한 커밋** |
| "레이아웃까지 바꿔라" | 같은 `/about`을 `full` 깊이로 다시. 남은 REFLEX 5건(§9-4)이 그때 풀린다 |
| "테마가 아니다" | `theme.mjs deal --reroll` 또는 다른 장르로 재추첨. §6의 Coral 선택 이유를 먼저 읽고 무엇이 안 맞았는지 특정할 것 |
| "되돌려라" | `git revert 561633c` 하나로 끝난다 |

확산으로 갈 때 **범위 한정을 푸는 방법**: `globals.css`의 `[data-hallmark="coral"]` 블록을 `:root`로 올리고, `/about`의 루트 div에서 그 속성을 지우고, `base.css`를 import하고, 스탬프를 넣는다. (§9-1)

---

## 4. 동작하는 명령

PowerShell 기준. Node는 이 PC에 설치돼 있다(v26.13.1).

**검사 (코드 변경 없음)**

```powershell
$env:PUPPETEER_EXECUTABLE_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"; node .claude\skills\hallmark\scripts\sloplint.mjs gonsuit\src --genre modern-minimal --render --url http://localhost:3000/
```

**테마 재추첨**

```powershell
node .claude\skills\hallmark\scripts\theme.mjs deal --genre modern-minimal --prompt "a software company homepage showing the products it builds" --reroll 1
```

**빌드**

```powershell
cd gonsuit; npm run build
```

**dev 서버 정리** (작업 끝에 반드시)

```powershell
Get-NetTCPConnection -LocalPort 3000,3001,3002,3003,3004,3005 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

---

## 5. 지뢰 — 밟으면 시간을 날린다

1. **렌더 검사 결과를 믿기 전에 `WARN render` 건수를 먼저 본다.** `the shots show a fallback: fonts or stylesheets did not load`가 한 건이라도 있으면 **그 실행 결과는 전부 버린다.** 스타일 없이 캡처되면 없던 FAIL(44d, 73)이 생기고 진짜 발견(49b, 81, F19, F20)은 사라진다
2. **dev 서버 포트를 3000으로 가정하지 않는다.** `npm run dev`를 중단해도 자식 프로세스가 포트를 잡고 있어 다음 실행이 조용히 3001·3002…로 옮겨간다. **로그에서 실제 포트를 읽는다**
3. **dev 서버가 떠 있는 상태에서 `npm run build`를 돌리지 않는다.** `.next`가 덮여 dev 서버의 CSS가 404가 된다. 빌드 전에 dev를 멈춘다
4. **검사 전에 대상 라우트를 전부 `curl`로 한 번씩 연다.** Next dev는 요청이 와야 컴파일한다. 첫 캡처가 미완성 상태를 찍는다
5. **`sloplint`는 import 여부를 보지 않고 디렉토리의 CSS를 스캔한다.** `gonsuit/src/app/base.css`는 **아직 import하지 않았는데** 그 안의 `prefers-reduced-motion` 때문에 게이트 27이 통과로 읽힌 적이 있다. 가짜 통과를 조심할 것
6. **GA4 핸들러를 `sloplint --kept`가 지켜주지 않는다.** React `onClick`은 인라인 핸들러가 아니고, 공통 컴포넌트는 대상 경로 밖이다. `--before`가 `handlers: 0`으로 기록하면 그 말이다. **사람이 `grep`으로 확인해야 한다**

---

## 6. 절대 하지 말 것

- **`tailwind.config.js`를 `hsl(var(--x))`로 되돌리지 말 것.** 지금은 `color-mix(in oklab, var(--x) calc(<alpha-value> * 100%), transparent)`다. 되돌리면 `bg-primary/10` 류 **15곳이 에러 없이 조용히 깨진다** (§1-1)
- **루트에 `design.md`를 미리 만들지 말 것.** 존재하면 Hallmark의 "모든 깊이에서의 시스템"이 되어 테마가 색·타입을 고를 기회가 사라진다. scaffold가 `tokens.css`를 만든 **뒤에** 그것으로부터 잠근다 (§3 Phase 2)
- **한국어 문구를 고치지 말 것.** 스탬프에 `copy: verbatim`을 넣는다. 게이트 19(대시)·63(가운뎃점)이 정상적인 한국어 표기와 충돌한다 (§1-6)
- **shadcn `--primary`를 `--color-accent`(산호색)에 매핑하지 말 것.** Coral의 Do-not이 "코랄은 띠·배경·제목에 쓰지 않는다"이다. 지금은 ink board에 매핑돼 있다 (§9-1)
- **숫자 주장을 지우지 말 것.** "2주 내 MVP", "99개 트렌드"는 실제 값이다. 게이트 46a가 지적해도 유지한다
- **`privacy/page.tsx`의 법적 문구를 수정하지 말 것.** 레이아웃만
- **`git commit`·`push`는 해도 된다** (2026-11-27 허가). 단 푸시 전 `npm run build` 통과, `main` 푸시는 곧바로 gonsuit.com 배포다

---

## 7. Claude Code가 아닌 도구를 쓸 경우

Hallmark 스킬 파일은 저장소에 있으므로 **경로만 알면 어느 도구에서든 읽을 수 있다.**

- 스킬 본문: `.claude/skills/hallmark/SKILL.md`
- 참조 문서: `.claude/skills/hallmark/references/` (`gates.md` 게이트 전문, `redesign.md` 재설계 절차, `export-formats.md` 토큰 변환, `themes/coral.md` 현재 테마)
- 스크립트: `.claude/skills/hallmark/scripts/` — Node로 직접 실행하면 되고 도구에 의존하지 않는다

도구 전용 위치에 설치하려면 (이미 있는 것과 중복되니 꼭 필요할 때만):

```powershell
npx skills add nutlope/hallmark --agent codex
```

`--agent`는 `claude-code` · `codex` · `cursor` · `opencode` · `github-copilot`를 받는다.

**`CLAUDE.md`를 자동으로 읽지 않는 도구라면** 세션 시작 시 그 파일을 직접 읽히는 것부터 한다. 이 프로젝트의 모든 현재값이 거기 있다.

---

## 8. 이 문서의 수명

확산이 끝나 리뉴얼이 완료되면 **이 문서는 쓸모가 없어진다.** `5_DESIGN_RENEWAL.md`와 함께 동결하거나 지운다. 진입 가이드를 살아 있는 척 남겨 두면 다음 사람이 낡은 재개 지점을 따라간다.
