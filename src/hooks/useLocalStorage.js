import { useState, useEffect } from 'react'

const key = 'token'

export function useLocalStorage (token) {

    const [value, setValue] = useState(token)

    function removeValue () {
        localStorage.removeItem(key)
        return setValue(null)
    }

    return [value, {setItem: setValue, removeItem: removeValue}]
}