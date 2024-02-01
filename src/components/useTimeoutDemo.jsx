import { useState } from 'react'
import { useTimeout } from '../hooks/useTimeout'

export function UseTimeoutDemo () {

    const [count, setCount] = useState(10)

    const {clear, reset} = useTimeout(() => setCount(0), 1000)

    return (
        <>
            <h2>UseTimeoutDemo</h2>
            <div>
                <p>
                    {count}
                </p>
                <button onClick={() => setCount(c => c + 1)}>Increment</button>
                <button onClick={() => reset()}>Set</button>
                <button onClick={() => clear()}>Stop Timeout</button>
            </div>
        </>
    )

}
