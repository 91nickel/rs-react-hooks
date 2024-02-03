import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'
import { useThrottle } from './useThrottle'

function getViewportSize () {
    return window && {
        width: window.innerWidth,
        height: window.innerHeight,
    }
}

export function useViewportSize () {
    const [size, setSize] = useState(getViewportSize)
    useWindowEvent('resize', ps => setSize(getViewportSize()))
    return useThrottle(size, 200)
}
