import { useEffect, useReducer, useRef } from 'react'
import { initialState, lmsReducer, units, type UnitId } from './lmsState'

const buttonClass = 'focus-ring border border-ink/25 px-4 py-2.5 text-sm font-bold transition-colors hover:border-accent hover:text-accent'

export default function LmsDemo() {
    const [state, dispatch] = useReducer(lmsReducer, initialState)
    const sequence = useRef(0)
    const timers = useRef(new Set<ReturnType<typeof setTimeout>>())
    const selectedUnit = units.find(unit => unit.id === state.unit)!

    useEffect(() => {
        const pending = timers.current
        return () => {
            pending.forEach(timer => clearTimeout(timer))
            pending.clear()
        }
    }, [])

    function request(unit: UnitId, delay = 1400, fail = false) {
        const id = ++sequence.current
        dispatch({ type: 'request', id, unit })
        const timer = setTimeout(() => {
            timers.current.delete(timer)
            if (fail) dispatch({ type: 'reject', id, unit })
            else dispatch({ type: 'resolve', id, unit, completed: units.find(item => item.id === unit)!.completed })
        }, delay)
        timers.current.add(timer)
    }

    function select(unit: UnitId) {
        dispatch({ type: 'select', unit })
        if (state.view === 'report') request(unit)
    }

    function openReport() {
        dispatch({ type: 'view', view: 'report' })
        if (state.status === 'idle') request(state.unit)
    }

    function simulateRace() {
        dispatch({ type: 'view', view: 'report' })
        request('sequence', 2400)
        request('repeat', 500)
    }

    function reset() {
        timers.current.forEach(timer => clearTimeout(timer))
        timers.current.clear()
        dispatch({ type: 'reset' })
    }

    return (
        <section data-reveal aria-labelledby="lms-demo-heading" className="mt-10 border-2 border-ink bg-white shadow-[6px_6px_0_#171714]">
            <header className="bg-ink p-5 text-paper sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Interactive example</p>
                <h2 id="lms-demo-heading" className="mt-2 text-xl font-black">선택한 단원과 리포트가 어긋나지 않도록</h2>
                <p className="mt-3 text-xs leading-6 text-paper/80">실무의 상태 관리 문제를 바탕으로 React로 새로 만든 독립 예제입니다. 가상 데이터와 지연 응답을 사용하며, 회사 코드·실제 API·운영 성과를 재현한 것은 아닙니다.</p>
            </header>
            <div className="border-b border-ink/20 bg-paper px-5 py-4 text-sm leading-6 sm:px-6">
                단원을 고른 뒤 코스와 리포트를 오가 보세요. ‘응답 순서 역전’은 순차를 느리게, 반복을 빠르게 조회해 이전 응답이 최신 결과를 덮는지 확인합니다.
            </div>
            <div className="flex flex-wrap items-center gap-2 border-b border-ink/20 p-4" role="group" aria-label="시연 화면 선택">
                <button type="button" aria-pressed={state.view === 'course'} onClick={() => dispatch({ type: 'view', view: 'course' })} className={`${buttonClass} ${state.view === 'course' ? 'bg-ink text-paper' : ''}`}>코스</button>
                <button type="button" aria-pressed={state.view === 'report'} onClick={openReport} className={`${buttonClass} ${state.view === 'report' ? 'bg-ink text-paper' : ''}`}>리포트</button>
                <button type="button" onClick={reset} className={`${buttonClass} ml-auto`}>초기화</button>
            </div>
            <div className="grid sm:grid-cols-[150px_minmax(0,1fr)]">
                <fieldset className="min-w-0 border-b border-ink/20 p-4 sm:border-b-0 sm:border-r">
                    <legend className="sr-only">학습 단원 선택</legend>
                    <p className="mb-3 text-xs font-bold text-ink/65">학습 단원</p>
                    <div className="flex gap-2 sm:flex-col">
                        {units.map(unit => <button key={unit.id} type="button" aria-pressed={state.unit === unit.id} onClick={() => select(unit.id)} className={`focus-ring flex-1 px-3 py-3 text-left text-sm font-bold ${state.unit === unit.id ? 'bg-accent text-ink' : 'bg-paper hover:bg-ink/10'}`}>{unit.name}</button>)}
                    </div>
                </fieldset>
                <div className="min-h-[230px] min-w-0 p-5 sm:p-6">
                    <p className="text-xs font-bold text-ink/65">현재 선택 · {selectedUnit.name}</p>
                    <h3 className="mt-2 text-2xl font-black">{state.view === 'course' ? '학습 코스' : '학습 리포트'}</h3>
                    {state.view === 'course' ? (
                        <div className="mt-5">
                            <p className="text-sm leading-7 text-ink/75">{selectedUnit.name} 단원을 선택했습니다. 리포트를 열었다가 돌아와도 이 선택은 유지됩니다.</p>
                            <button type="button" onClick={openReport} className={`${buttonClass} mt-5`}>선택 단원 리포트 열기 →</button>
                        </div>
                    ) : (
                        <div role="status" aria-live="polite" aria-atomic="true" className="mt-5">
                            {state.status === 'loading' && <p className="text-sm text-ink/75">{selectedUnit.name} 리포트를 조회하고 있습니다…</p>}
                            {state.status === 'ready' && state.result && <p className="text-sm leading-7"><strong className="block text-xl">{selectedUnit.name} · 학습 완료 {state.result.completed}명</strong><span className="text-ink/65">가상 학급 데이터 · 최신 요청의 결과만 표시합니다.</span></p>}
                            {state.status === 'error' && <p className="text-sm leading-7 text-ink/80">요청 실패를 재현했습니다. 선택한 단원은 유지됩니다. 아래 ‘현재 단원 다시 조회’로 재시도할 수 있습니다.</p>}
                            {state.status === 'idle' && <p className="text-sm">리포트 조회를 시작해 주세요.</p>}
                        </div>
                    )}
                </div>
            </div>
            <div className="border-t border-ink/20 p-5 sm:p-6">
                <p className="text-xs font-bold text-ink/65">확인할 시나리오</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={simulateRace} className={buttonClass}>응답 순서 역전</button>
                    <button type="button" onClick={() => { dispatch({ type: 'view', view: 'report' }); request(state.unit, 800, true) }} className={buttonClass}>요청 실패 재현</button>
                    <button type="button" onClick={() => { dispatch({ type: 'view', view: 'report' }); request(state.unit) }} className={buttonClass}>현재 단원 다시 조회</button>
                </div>
                <p role="status" className="mt-4 text-xs leading-6 text-ink/70">현재 요청 #{state.requestId} · 반영하지 않은 이전 응답 {state.ignored}건</p>
            </div>
            <details className="border-t border-ink/20 px-5 py-4 sm:px-6">
                <summary className="focus-ring cursor-pointer text-sm font-bold">이 예제의 설계와 검증</summary>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-ink/80">
                    <li>화면 선택과 학습 단원을 분리해 코스↔리포트 이동 시 단원을 유지합니다. 브라우저 새로고침 시에는 초기화됩니다.</li>
                    <li>요청 번호와 단원을 함께 검사해, 이미 도착 순서가 바뀐 응답이 최신 화면에 반영되지 않게 합니다.</li>
                    <li>오류와 로딩 상태를 구분하고 재시도할 수 있게 합니다. 타이머는 페이지를 떠나거나 초기화할 때 해제합니다.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-5 text-xs font-bold">
                    <a href="https://github.com/ShinByoungWoo/portfolio/blob/main/src/components/projects/lmsState.ts" target="_blank" rel="noreferrer" className="focus-ring underline underline-offset-4">상태 처리 코드 ↗</a>
                    <a href="https://github.com/ShinByoungWoo/portfolio/blob/main/tests/lms-state.test.mjs" target="_blank" rel="noreferrer" className="focus-ring underline underline-offset-4">회귀 테스트 ↗</a>
                </div>
            </details>
        </section>
    )
}
