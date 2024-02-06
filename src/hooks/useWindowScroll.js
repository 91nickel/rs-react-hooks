import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'
import { useThrottle } from './useThrottle'

function getWindowScroll () {
    return window && {
        x: window.scrollX,
        y: window.scrollY,
    }
}

export function useWindowScroll () {
    const [scroll, setScroll] = useState(getWindowScroll)

    useWindowEvent('scroll', ps => setScroll(getWindowScroll()))

    return [
        useThrottle(scroll, 200),
        ({x, y}) => window.scrollTo(
            typeof x === 'number' ? x : scroll.x,
            typeof y === 'number' ? y : scroll.y
        )
    ]
}
