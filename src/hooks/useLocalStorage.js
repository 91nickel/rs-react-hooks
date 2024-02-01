import { useState, useEffect } from 'react'

const key = 'token'

export function useLocalStorage (token) {

    const [value, setValue] = useState('')

    useEffect(() => {
        setItem(token)
    }, [])

    function setItem (value) {
        localStorage.setItem(key, value)
        return setValue(value)
    }

    function removeItem () {
        localStorage.removeItem(key)
        return setValue(null)
    }

    return [value, {setItem, removeItem}]
}