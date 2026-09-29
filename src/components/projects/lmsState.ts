export const units = [
    { id: 'sequence', name: '순차', completed: 18 },
    { id: 'repeat', name: '반복', completed: 12 },
    { id: 'condition', name: '선택', completed: 7 },
] as const

export type UnitId = typeof units[number]['id']
export interface DemoState {
    unit: UnitId
    view: 'course' | 'report'
    status: 'idle' | 'loading' | 'ready' | 'error'
    requestId: number
    result: { unit: UnitId; completed: number } | null
    ignored: number
}

export const initialState: DemoState = {
    unit: 'sequence', view: 'course', status: 'idle', requestId: 0, result: null, ignored: 0,
}

export type DemoAction =
    | { type: 'select'; unit: UnitId }
    | { type: 'view'; view: DemoState['view'] }
    | { type: 'request'; id: number; unit: UnitId }
    | { type: 'resolve'; id: number; unit: UnitId; completed: number }
    | { type: 'reject'; id: number; unit: UnitId }
    | { type: 'reset' }

/** Independent portfolio example, not the production LMS implementation. */
export function lmsReducer(state: DemoState, action: DemoAction): DemoState {
    switch (action.type) {
        case 'select':
            return action.unit === state.unit ? state : { ...state, unit: action.unit, status: 'idle', result: null }
        case 'view':
            return { ...state, view: action.view }
        case 'request':
            return { ...state, unit: action.unit, requestId: action.id, status: 'loading', result: null }
        case 'resolve':
        case 'reject':
            if (action.id !== state.requestId || action.unit !== state.unit || state.status !== 'loading') {
                return { ...state, ignored: state.ignored + 1 }
            }
            return action.type === 'reject'
                ? { ...state, status: 'error', result: null }
                : { ...state, status: 'ready', result: { unit: action.unit, completed: action.completed } }
        case 'reset':
            return initialState
    }
}
