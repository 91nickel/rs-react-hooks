import { useState, useRef } from 'react'

export function UseRefDemo () {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const countRef = useRef(0)

    console.log(`#### ref`, ref)

    const style = {
        padding: '12px',
        background: 'red',
    }

    function handleClick () {
        // const boxEl = document.getElementById('box')
        if (ref.current !== null) {
            ref.current.style.width = `${ref.current.offsetWidth / 2}px`
        }
    }

    return (
        <>
            <h2>UseRefDemo1</h2>
            <p>
                Count state: {count}
            </p>
            <p>
                Count ref: {countRef.current}
            </p>
            <button onClick={() => setCount(prevState => prevState + 1)}>Click Count</button>
            <button onClick={() => countRef.current = countRef.current + 1}>Click Count Ref</button>

            <h2>UseRefDemo2</h2>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
            <div id="box" ref={ref} style={style}>
                BOX
            </div>
        </>
    )
}
