import assert from 'node:assert/strict'
import test from 'node:test'
import { initialState, lmsReducer } from '../src/components/projects/lmsState.ts'

test('코스와 리포트를 오가도 선택한 단원을 유지한다', () => {
    let state = lmsReducer(initialState, { type: 'select', unit: 'repeat' })
    state = lmsReducer(state, { type: 'view', view: 'report' })
    state = lmsReducer(state, { type: 'view', view: 'course' })
    assert.equal(state.unit, 'repeat')
})

test('다른 단원을 고르면 이전 단원의 결과를 즉시 제거한다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 1, unit: 'sequence' })
    state = lmsReducer(state, { type: 'resolve', id: 1, unit: 'sequence', completed: 18 })
    state = lmsReducer(state, { type: 'select', unit: 'condition' })
    assert.equal(state.result, null)
    assert.equal(state.status, 'idle')
})

test('느린 이전 응답이 새 단원의 결과를 덮지 않는다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 1, unit: 'sequence' })
    state = lmsReducer(state, { type: 'request', id: 2, unit: 'repeat' })
    state = lmsReducer(state, { type: 'resolve', id: 2, unit: 'repeat', completed: 12 })
    state = lmsReducer(state, { type: 'resolve', id: 1, unit: 'sequence', completed: 18 })
    assert.deepEqual(state.result, { unit: 'repeat', completed: 12 })
    assert.equal(state.ignored, 1)
})

test('같은 단원을 연속 조회해도 마지막 요청만 반영한다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 1, unit: 'sequence' })
    state = lmsReducer(state, { type: 'request', id: 2, unit: 'sequence' })
    state = lmsReducer(state, { type: 'resolve', id: 1, unit: 'sequence', completed: 8 })
    assert.equal(state.status, 'loading')
    assert.equal(state.result, null)
    state = lmsReducer(state, { type: 'resolve', id: 2, unit: 'sequence', completed: 18 })
    assert.equal(state.result.completed, 18)
})

test('이전 요청의 실패가 최신 성공 상태를 바꾸지 않는다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 1, unit: 'sequence' })
    state = lmsReducer(state, { type: 'request', id: 2, unit: 'repeat' })
    state = lmsReducer(state, { type: 'resolve', id: 2, unit: 'repeat', completed: 12 })
    state = lmsReducer(state, { type: 'reject', id: 1, unit: 'sequence' })
    assert.equal(state.status, 'ready')
    assert.equal(state.result.unit, 'repeat')
})

test('실패 후 재시도하면 선택을 유지한 채 결과를 갱신한다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 1, unit: 'repeat' })
    state = lmsReducer(state, { type: 'reject', id: 1, unit: 'repeat' })
    assert.equal(state.status, 'error')
    assert.equal(state.unit, 'repeat')
    state = lmsReducer(state, { type: 'request', id: 2, unit: 'repeat' })
    state = lmsReducer(state, { type: 'resolve', id: 2, unit: 'repeat', completed: 12 })
    assert.equal(state.status, 'ready')
    assert.equal(state.result.completed, 12)
})

test('초기화 후 이전 응답은 화면에 반영되지 않는다', () => {
    let state = lmsReducer(initialState, { type: 'request', id: 4, unit: 'repeat' })
    state = lmsReducer(state, { type: 'reset' })
    state = lmsReducer(state, { type: 'resolve', id: 4, unit: 'repeat', completed: 12 })
    assert.equal(state.result, null)
    assert.equal(state.status, 'idle')
})
