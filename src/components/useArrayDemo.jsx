import { useArray } from '../hooks/useArray'

export function UseArrayDemo () {
    const [array, {push, update, remove, clear}] = useArray([1, 2, 3, 4, 5, 6])

    return (
        <>
            <h2>UseArrayDemo</h2>
            <p>
                [ {array.join(',')} ]
            </p>
            <button onClick={() => push(array.length)}>PUSH</button>
            <button onClick={() => update(3, 10)}>UPDATE</button>
            <button onClick={() => remove(4)}>REMOVE 4 element</button>
            <button onClick={() => clear()}>CLEAR</button>
        </>
    )
}
