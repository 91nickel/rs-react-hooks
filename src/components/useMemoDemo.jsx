import { useState, useMemo, useEffect } from 'react'

function slowFunction (number) {
    const start = new Date().getTime()
    let end = start
    while (end < start + 500) {
        end = new Date().getTime()
    }
    return number * 2
}

export function UseMemoDemo () {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // Так будет тормозить, в том числе и при смене цвета
    // const doubleNumber = slowFunction(number)
    // Так будет норм
    const doubleNumber = useMemo(() => slowFunction(number), [number])

    // так themeDark - это будет новый объект при каждом рендере
    // const themeDark = {
    //     color: dark ? 'white' : '#282c34',
    //     backgroundColor: dark ? '#282c34' : 'white',
    // }
    // А так - нет
    const themeDark = useMemo(() => ({
        color: dark ? 'white' : '#282c34',
        backgroundColor: dark ? '#282c34' : 'white',
    }), [dark])

    useEffect(() => {
        console.log(`####: Change theme dark constant`)
    }, [themeDark])

    return (
        <>
            <div style={themeDark}>
                <h2>UseMemoDemo</h2>
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button
                    onClick={() => setDark(p => !p)}
                >
                    TOGGLE DARK
                </button>
                <div>
                    {doubleNumber}
                </div>
            </div>
        </>
    )
}
