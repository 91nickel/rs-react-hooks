import { useState, useEffect } from 'react'
import { useUpdateEffect } from '../hooks/useUpdateEffect'

export function UseUpdateEffectDemo () {
    const [count, setCount] = useState(10)

    useUpdateEffect(() => {
        alert('ALERT')
    }, [count])

    return (
        <>
            <h2>UseUpdateEffectDemo</h2>
            <p>
                {count}
            </p>
            <button onClick={() => setCount(c => c +1)}>INCREMENT</button>
        </>
    )
}
