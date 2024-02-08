import { useReducer } from 'react'

const initialState = {
    current: 0,
    variants: [true, false],
}

function reducer (state, {type, payload}) {
    if (type === 'TOGGLE') {
        const index = state.variants.indexOf(payload)
        if (typeof payload !== 'undefined' && index > -1) {
            return {...state, current: index}
        } else {
            return {...state, current: (state.current + 1) % state.variants.length}
        }
    }
    return {...state}
}

export function useToggle (variants) {
    const [state, dispatch] = useReducer(
        reducer,
        Array.isArray(variants) && variants.length > 1
            ? {...initialState, variants: variants}
            : initialState
    )

    return [
        state.variants[state.current],
        payload => dispatch({type: 'TOGGLE', payload}),
    ]
}