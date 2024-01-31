import { useCallback, useRef, useState, useEffect } from 'react'

export function useTimeout (callback, delay) {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

    }

    useEffect(() => {
        set()
    }, [set])

    return {
        set, clear
    }
}