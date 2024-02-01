import { useState, useCallback, useMemo, useEffect } from 'react'

function List ({getItems}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log(`####: useEffect getItems`)
        setItems(getItems())
    }, [getItems])

    return (
        <ul>
            {
                items.map(item => <li key={item}>{item}</li>)
            }
        </ul>

    )
}

export function UseCallbackDemo () {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const themeDark = useMemo(() => ({
        color: dark ? 'white' : '#282c34',
        backgroundColor: dark ? '#282c34' : 'white',
    }), [dark])

    // В таком виде функция каждый раз новая и будет вызывать срабатывание useEffect в компоненте List
    // function getItems () {
    //     return [number, number + 1, number + 2]
    // }
    // А так функция запомнится и будет збс
    const getItems = useCallback(
        function () {
            return [number, number + 1, number + 2]
        },
        [number]
    )

    return (
        <>
            <div style={themeDark}>
                <h2>UseCallbackDemo</h2>
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
                    <List getItems={getItems}/>
                </div>

            </div>
        </>
    )
}
