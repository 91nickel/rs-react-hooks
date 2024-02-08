import { useToggle } from '../hooks/useToggle'

export function UseToggleDemo () {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
    const [valueLightDark, toggleLightDark] = useToggle(['light', 'dark'])
    const [boolValue, toggleBool] = useToggle()

    return (
        <>
            <div>
                <p>String value: {value}</p>
                <button onClick={() => toggle()}>Toggle string value</button>
            </div>
            <hr/>
            <div>
                <p>Light / Dark value: {valueLightDark}</p>
                <button onClick={() => toggleLightDark()}>Toggle light / dark value</button>
                <button onClick={() => toggleLightDark('dark')}>Set dark</button>
            </div>
            <hr/>
            <div>
                <p>Bool value: {boolValue.toString()}</p>
                <button onClick={() => toggleBool()}>Toggle bool value</button>
            </div>
            <hr/>
        </>
    )
}
