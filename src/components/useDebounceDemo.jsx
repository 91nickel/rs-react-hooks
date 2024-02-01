import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export function UseDebounceDemo () {
    const [val, setVal] = useState(10)
    const [count, setCount] = useState('')

    useDebounce(() => {
        console.log(`####: Запроси мне API`)
    }, 1000, [val])

    return (
        <>
            <h2>UseDebounceDemo</h2>
            <p>
                {count}
            </p>
            <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
            <button onClick={() => setCount(c => c + 1)}>INCREMENT</button>
        </>
    )
}
