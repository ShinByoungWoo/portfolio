# codmos-enable3d 게임 로직 분석

> 경로: `c:\Users\workspace\codmos-enable3d\src\scripts\game\`
> 포트폴리오 포팅 참고용 문서

---

## 1. dgtl_ltrcy_kybrd — 키보드 타자 게임

### 개요
한글/영문 타자 연습 게임. 4가지 난이도 씬으로 구성.
핵심 클래스 `TypingClclt`가 입력 처리, WPM·정확도 계산, 손 애니메이션 제어를 담당.

### 씬 구성

| 씬 | 내용 | 입력 방식 |
|---|---|---|
| `Scene1` (자리연습) | 한 글자씩 자리 익히기. 8~10개 문자 나열 → 왼쪽으로 스크롤 | 즉시 입력 (Enter 불필요) |
| `Scene2` (낱말연습) | 단어 단위 입력 | Enter 제출 |
| `Scene3` (단문연습) | 짧은 문장 | Enter 제출 |
| `Scene4` (장문연습) | 긴 문장 | Enter 제출 |

### 핵심 클래스: `TypingClclt`

**파일**: `dgtl_ltrcy_kybrd_clclt.ts`

#### 상태
```
crntIdx: number       // 현재 문제 인덱스
crntAnswr: number     // 맞춘 개수
crntWrong: number     // 틀린 개수
_acrcy: number        // 정확도 (%)
_wpm: number          // 타수 (WPM)
_wpmArr: number[]     // 각 문제별 WPM 배열 (평균 계산용)
```

#### 입력 처리 메서드
- `chckKybrdEvent(e)` — Scene1 전용. 키 입력 즉시 정답 판별
- `chckKybrdEvent2(e)` — Scene2 전용. Enter 시 `el.value`와 현재 문제 비교
- `chckKybrdEvent34()` — Scene3/4 전용. Enter 시 문장 비교

#### WPM 계산
```typescript
// 한글 문자열을 초중종성으로 분해 후 타수 계산
getWpm(second, wordCnt) {
  _wpm = Math.floor((wordCnt * 60) / second)
}

// 한글 분해 (초성/중성/종성 분리)
breakWord(word: string): number {
  // '가' ~ '힣' 범위면 초/중/종 각각 1타로 카운트
  // 종성 없으면 2타
}
```

#### 정확도 계산
```typescript
getAcrcy() {
  _acrcy = Math.floor(((totCnt - crntWrong) / totCnt) * 100)
}
// 정확도 60% 미만 → 미션 실패
// 60~80% → 별 2개, 80% 이상 → 별 3개
```

#### 별 시스템
- 3개 별(Star)로 시작
- `chckStar(acrcy)`: 정확도 80% 미만 → 별 2개로 감소, 60% 미만 → 별 1개로 감소

#### Spine 손 애니메이션 (Scene1 전용)
- `HANDSPINE_MAP2`: 한글 자모 / 영문 → `{ lft, rght, mapKey, shift? }` 매핑
- 문제 글자에 해당하는 키를 왼손/오른손 Spine 애니메이션으로 표시
- 특수문자(`,` `.` `` ` `` 등)는 손 위치를 별도 오프셋으로 이동

#### 트윈 (문제 전환)
- Scene1: `playTween1()` — 문제 목록 x축 `-270px` 이동 (가로 스크롤)
- Scene2: `playTween2()` — x축 `-391px` 이동
- Scene3/4: `playTween34()` — y축 `-130px` 이동 (세로 스크롤)

#### 30초 무활동 감지
```typescript
// 30초 동안 입력 없으면 캐릭터(마법사, 제자) sleep 애니메이션
scene.time.addEvent({ delay: 30000, ... → dscplSpine.setAnimation('sleep') })
```

#### 미션 완료 콜백
```typescript
Emitter.missionDone({
  isSucces: boolean,
  totTime: number,    // 걸린 시간(초)
  acrcy: number,      // 정확도
  wpm: number,        // 타수
  starCnt: number,    // 별 개수
  answrCnt: number,   // 맞춘 수
  totCnt: number,     // 전체 문제 수
})
```

### 씬 서브타입 (Scene1)
```
BASIC   기본자리 8개
LFT1    왼손 윗자리 4개(Shift 포함 8개)
RGHT1   오른손 윗자리
LFT2    왼손 아래자리
RGHT2   오른손 아래자리
CNTER   가운데 자리
NUM     숫자 10개
ALL     전체 랜덤
DBL     이중 모음
SPCL    특수 문자
```

### 캔버스 크기
`2928 × 1282`

---

## 2. findout_data — 경로 분류 컨베이어 게임

### 개요
타일맵 기반 경로 위를 박스(PathFollower)가 이동.
분기 타일을 클릭해 방향을 바꿔 박스가 올바른 목적지에 도착하게 유도.
박스를 클릭하면 모달이 열려 콘텐츠 유형(텍스트/이미지/오디오/비디오)을 확인 가능.

### 핵심 클래스

#### `TileMap` (`object/tile_map.ts`)
`Phaser.Tilemaps.Tilemap` 확장.

**타일 인덱스 의미**
```
1~2, 5~6, 9~10   직선 레일
13~22            분기점 타일 (클릭 가능)
  13/14 → RIGHT
  15/16 → STRAIGHT (좌우 전환 가능)
  17/18 → RIGHT (위 방향)
  19/20 → STRAIGHT
  21/22 → LEFT
23~26            도착지 타일 (text/image/audio/video)
```

**타일 애니메이션**
200ms마다 even↔odd 인덱스 교번 → 레일이 움직이는 시각 효과

**분기 클릭 처리**
```typescript
handler(pointer) {
  // 마름모 판정: (dx/halfW) + (dy/halfH) <= 1
  // 분기 타일 인덱스 토글 → customLayer.putTileAt(newTileIndex, ...)
}
```

**분기 방향 전환 (toggleBranchDirection)**
```
13 ↔ 17(위)/19(좌우)
14 ↔ 18(위)/20(좌우)
15 ↔ 17(위)/21(아래)
16 ↔ 18(위)/22(아래)
17 → 15, 18 → 16, 19 → 13, 20 → 14
21 → 15, 22 → 16
```

**Follower 생성 주기**
`config.delay` ms 간격으로 `boxOrder.length`개 Follower 순차 생성

#### `Follower` (`object/follower.ts`)
`Phaser.GameObjects.PathFollower` 확장.

**박스 타입 (spriteIndex)**
```
26  text    (downSprite: 31)
27  image   (downSprite: 32)
28  audio   (downSprite: 33)
29  video   (downSprite: 34)
30  random  (downSprite: 35)  ← 내용물 숨겨진 박스
```

**이동 로직 (updatePathFollower)**
```typescript
// 1. 현재 타일 인덱스 확인
// 2. tileDirections 맵에서 방향 결정 (STRAIGHT/RIGHT/LEFT)
// 3. 다음 타일 worldXY 계산
// 4. Path.lineTo(nextXY) → startFollow({ duration: 800 })
// 5. onComplete → 재귀적으로 updatePathFollower 호출
```

**내리막 처리**
타일 인덱스 9~12: 내리막 → `setVisible(false)`, `downImage(downSprite).setVisible(true)`

**도착지 판정 (checkDoneData)**
```typescript
// followerSpriteIndex → indexMap으로 기대 타일 인덱스 계산
// tile.index === expectedIndex → 정답
// 정답: successAnims 재생, sound.play('correct'), 점수 추가
// 오답: tint 0xff4b4b, sound.play('wrong'), heart 감소
```

**콤보 시스템 (미션 1_S_1)**
```typescript
comboCount >= 2 → score += 100 + 10 * comboCount
오답 → comboCount = 0
```

#### 모달 (modal.ts)
- 박스 클릭 → `TileMap.openModal(modalType, modalDataIndex, randomData?)`
- 모달 표시 중 Follower 일시정지
- 모달 닫기 → 재개

### 미션 타입
- `1_S_1`: 타이머 + 점수 기반 (콤보 보너스)
- 그 외: 하트 3개, 오답 시 하트 감소, 0이 되면 실패

### 박스 콘텐츠 데이터
```typescript
DATA_KEY.DATA_1 ~ DATA_5: {
  text: MsgMngr.msg.findout_data.data_N,  // 한영 텍스트
  image: 'uuid.png',
  audio: 'uuid.mp3',
  video: 'uuid.mp4',
}
```

### 캔버스 크기
`2928 × 1282`

---

## 3. laser — 레이저 반사 퍼즐 게임

### 개요
그리드 위를 플레이어(Spine 캐릭터)가 이동하며 거울을 밀어
레이저가 배터리(바이러스)에 도달하도록 경로를 설계하는 퍼즐.

### 핵심 클래스

#### `LaserScene` (`objct/scene/scene.ts`)

**게임 구조**
```
GRID_SIZE = Math.floor(850 / gridCnt)   // 850/9 = 94px 또는 850/11 = 77px
그리드: 9×9 (기본) 또는 11×11 (고급)
```

**오브젝트 종류**
```
laser01, laser02   레이저 발사대 (위치/방향 고정)
halmet             플레이어 캐릭터 (Spine)
battery            바이러스 (배터리 모양, 레이저 맞춰야 할 목표)
mirror_move_DR/DL/UR/UL   이동 가능 거울 4종류
mirror_fixed_DR/DL/UR/UL  고정 거울
```

**플레이어 이동**
```typescript
// 방향키 (↑↓←→) or 화면 터치 방향
handleKeyEvent(drct: DRCT) → player.move(drct)
// 이동 시 거울 충돌 → 거울 함께 밀기
// 이동 후 레이저 경로 재계산
```

**미션 클리어 조건**
```typescript
missionDone() {
  // 모든 레이저가 배터리에 도달 (allLasersMisnChck)
  // AND 모든 배터리가 클리어 (allBtryClrChck)
  → Emitter.missionDone({ isSucces: true, moveCnt })
}
```

**결과 데이터**
```typescript
Emitter.missionDone({
  isSucces: boolean,
  moveCnt: number,    // 총 이동 횟수
})
```

#### `LaserGrp` (laser_grp.ts)
- `creatLaserLnchr(adminObjctInfoArr)`: 어드민 데이터에서 발사대 생성
- `creatLaser()`: 레이저 빔 객체 생성 (Graphics로 선 그리기)
- `laser[i].misnChck`: 해당 레이저가 배터리에 도달했는지 여부

#### `ObjctsGrp` (objcts_grp.ts)
- `creatObjcts(adminObjctInfoArr)`: 거울, 배터리 생성
- `getBtry()`: 배터리 객체 배열 반환
- `e.getData('isBtryClr')`: 배터리 클리어 여부

#### `Player` (player/player.ts)
- Spine 캐릭터
- `move(drct)`: 방향 이동, 이동 완료 후 레이저 재계산
- `spineCntnr.succes()`: 성공 애니메이션

### 미션 데이터 구조 (어드민 제공)
```typescript
misnData.cnvsData = {
  gridClmn: 9 | 11,           // 그리드 크기
  objct: IMisnDataInfo[],     // 오브젝트 배열
}

IMisnDataInfo = {
  x: number,      // 그리드 X 좌표 (1-based)
  y: number,      // 그리드 Y 좌표
  res: string,    // 리소스 이름 (halmet, laser01, mirror_move_DR, battery 등)
  rotate: number, // 회전각 (0/90/180/270)
}
```

### 레이저 경로 계산 (laser.ts 추정)
- 발사대에서 시작, 직선 이동
- `DRCT.UP/DOWN/LEFT/RIGHT` 방향
- 거울 충돌 → 반사 방향 결정 (DR: ↓→, DL: ↓←, UR: ↑→, UL: ↑←)
- 배터리 충돌 → `isBtryClr = true`
- 벽 또는 이동불가 오브젝트 충돌 → 중단
- 레이저는 매 이동 후 재계산 (Graphics clear → redraw)

### 캔버스 크기
`850 × 1000`

---

## 포트폴리오 포팅 방향

### 선정 게임

| 원본 게임 | 포트폴리오 게임 | 포팅 핵심 |
|---|---|---|
| `dgtl_ltrcy_kybrd` Scene2 (낱말연습) | **Typing Challenge** | `TypingClclt.breakWord()` 한글 분해 WPM, Enter 제출 플로우, 트윈 전환 |
| `findout_data` | **Conveyor Line** | `TileMap` + `PathFollower` 패턴, 분기 클릭, 박스 타입 판별 |
| `laser` | **Laser Puzzle** | 그리드 이동, 거울 반사 레이저, `misnChck` 판정 |

### 포팅 시 단순화 항목 (이미지 없는 환경)
- Spine 손 애니메이션 → 키보드 키캡 하이라이트 (Canvas 직접 그리기)
- 배경 이미지 → 단색 + 그라디언트
- 타일맵 JSON → 하드코딩 2D 배열로 대체
- 어드민 미션데이터 → 3~5개 스테이지 하드코딩







## 중요 재구현 방식

이 3가지 게임을 포트폴리오 게임에 넣을거야 
현재 잇는거는 뺴고

다만 기존과동일하게 적용하면 디자인이 없어서 엑스박스가 뜰테니

조금 변경이 필요함

1. 타자게임은 한글 & 영어 기반이 필수임 특수문자들까지 UI 구성은 간단하게 랜덤 텍스트를 사용자가 보고 적는수준으로 

알파벳부터 한글 자음모음, 단어 , 문장까지

기존 로직에 있는 UI들은 최소화 하고 
동작 로직은 그대로 구현하도록 
다만 보완할 점이 있다면 해당 부분에 TODO 를 걸어 보완을 어떻게 하는게 더좋을지 요약해서 작성해두기

2. 파인드아웃 데이터 : 이건 타일맵을 써서 만든 컨텐츠인데
현재는 시작2층 레이어에서 택배가 1층 레이어로 내려오고 
마지막 동일한 색상의 값이 도달할수있도록 
각 라인의 분기점마다 클릭을 하여 방향을 바꾸는 컨텐츠로 만들건데

레이어까지 들어가면 복잡도가 올라가니 
그냥 만들어줘 1층으로 
만들때 당시 타일맵은 행렬 방식으러 
[] 안에서 x,y 좌표를 각 숫자 = 다른 타일로 구성하며 만들었음

이 예시는 간단하게 만들수있으면 해주고 
없다면 타일맵 json을 내가 따로구해오겠음

3. 레이저 컨텐츠는 9*9로만 간단하게 그리드 만들고
캐릭터가 이동하는방식 로직, 레이저가 발사되며 어디까지 그려지는지 등에 대한 로직 그대로 사용


위 3가지 모두
기존로직을 최대한 살려 구현하지만
보완할점이라든가 성능 이슈를 위해 대응할 곳ㅇ ㅣ있다면

TODO로 주석을 달고 방식을 써놔줘 

