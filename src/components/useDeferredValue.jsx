import { useState, useDeferredValue, useMemo } from 'react'

const LIST_SIZE = 20000

function List ({input}) {
    const deferredInput = useDeferredValue(input)
    // отработает сразу
    console.log(`####: input`, input)
    // отработает чуть позже
    console.log(`####: deferredInput`, deferredInput)

    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{input}</div>)
        }
        return l
    }, [
        // Будут тормоза
        // input,
        // Будет збс
        deferredInput,
    ])

    return (
        <div>
            {
                list
            }
        </div>
    )
}

export function UseDeferredValueDemo () {
    const [input, setInput] = useState('')

    function handleChange (e) {
        setInput(e.target.value)
    }

    return (
        <>
            <h2>UseDeferredValueDemo</h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
            <div>
                <List input={input}/>
            </div>
        </>
    )
}
