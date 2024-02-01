import { useState } from 'react'

export function useArray (defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push (element) {
        setArray(p => [...p, element])
    }

    function update (index, newElement) {
        setArray(p => {
            return [
                ...p.slice(0, index),
                newElement,
                ...p.slice(index + 1, p.length - 1),
            ]
        })
    }

    function remove (index) {
        setArray(p => [
            ...p.slice(0, index),
            ...p.slice(index + 1, p.length - 1)
        ])
    }

    function filter (callback) {
        setArray(p => p.filter(callback))
    }

    function clear () {
        setArray([])
    }

    return [
        array,
        {
            push,
            update,
            remove,
            clear
        }
    ]
}