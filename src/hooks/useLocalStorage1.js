import { useState, useEffect } from 'react'

function getValuesStorage (key, initialState) {
    const saveValue = JSON.parse(localStorage.getItem(key))

    if (saveValue) {
        return saveValue
    }

    if (initialState instanceof Function) {
        return initialState()
    }

    return initialState
}

export function useLocalStorage1 (key, initialState) {
    const [value, setValue] = useState(() => {
        return getValuesStorage(key, initialState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}