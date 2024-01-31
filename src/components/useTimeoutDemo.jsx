import { useState } from 'react'
import { useTimeout } from '../hooks/useTimeout'

export function UseTimeoutDemo () {

    const [count, setCount] = useState(10)

    const {clear, set} = useTimeout(() => setCount(0), 1000)

    return (
        <>
            <h2>UseTimeoutDemo</h2>
            <div>
                <p>
                    {count}
                </p>
                <button onClick={() => setCount(c => c + 1)}>Increment</button>
                <button onClick={() => set()}>Set</button>
                <button onClick={() => clear()}>Stop Timeout</button>
            </div>
        </>
    )

}
