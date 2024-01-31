import { useToggle } from '../hooks/useToggle'

export function UseToggleDemo () {
    const [state, setState] = useToggle(false)

    return (
        <>
            <h2>UseToggleDemo</h2>
            <p>
                {state.toString()}
            </p>
            <button onClick={() => setState()}>Toggle</button>
            <button onClick={() => setState(true)}>Set True</button>
            <button onClick={() => setState(false)}>Set False</button>
        </>
    )

}
