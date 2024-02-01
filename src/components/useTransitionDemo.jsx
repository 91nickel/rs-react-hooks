import { useState, useTransition } from 'react'

const LIST_SIZE = 20000

export function UseTransitionDemo () {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()

    function handleChange (e) {
        setInput(e.target.value)
        // Тут прежде чем дело дойдет до setList пройдет хуева туча времени
        // const l = []
        // for (let i = 0; i < LIST_SIZE; i++) {
        //     l.push(e.target.value)
        // }
        // setList(l)
        // А вот так мы говорим, что мол первый set делай, а второй обождет
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <h2>UseTransitionDemo</h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
            <div>
                {
                    isPending
                    ? 'Загрузка...'
                    : list.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
        </>
    )
}
