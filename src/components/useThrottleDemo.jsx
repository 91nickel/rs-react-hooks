import { useState, useRef } from 'react'
import { useThrottle } from '../hooks/useThrottle'

export function UseThrottleDemo () {
    const [value, setValue] = useState('')
    const throttledValue = useThrottle(value)

    return (
        <>
            <h2>UseThrottleDemo</h2>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <p>
                { throttledValue }
            </p>

        </>
    )
}
