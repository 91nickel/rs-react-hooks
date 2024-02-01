import { useState, useLayoutEffect, useEffect } from 'react'

function App2 () {
    return (
        <>
            <h1>App 2</h1>
        </>
    )
}

export function UseLayoutEffectDemo () {
    const [visible, setVisible] = useState(false)

    // В таком виде изменения пойдут на уже отрисованном дереве
    // useEffect(() => {
    // А вот так на еще не отрисованном
    useLayoutEffect(() => {
        if (!visible) {
            return
        }
        const btn = document.getElementById('btn-use-layout')
        const box = document.getElementById('box-use-layout')
        const {bottom} = btn.getBoundingClientRect()
        box.style.top = `${bottom + 25}px`

    }, [visible])

    useEffect(() => {
        console.log(`####: useEffect 1: `)
    }, [])
    useLayoutEffect(() => {
        // useLayoutEffect независимо от последовательности всегда отработает первым
        console.log(`####: useLayoutEffect 1: `)
    }, [])
    useEffect(() => {
        console.log(`####: useEffect 2: `)
    }, [])
    useLayoutEffect(() => {
        console.log(`####: useLayoutEffect 2: `)
    }, [])

    const style = {
        background: 'black',
        position: 'relative',
        top: '10px',
    }

    return (
        <>
            <h2>UseLayoutEffectDemo</h2>
            <div>
                <button id="btn-use-layout" onClick={() => setVisible(p => !p)}>{visible ? 'HIDE' : 'SHOW'}</button>
            </div>
            {
                visible && (
                    <div
                        id="box-use-layout"
                        style={style}
                    >
                        <App2/>
                    </div>
                )
            }
        </>
    )
}
