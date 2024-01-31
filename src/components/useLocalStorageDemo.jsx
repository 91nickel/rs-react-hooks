import { useLocalStorage } from '../hooks/useLocalStorage'
import { useUpdateLogger } from '../hooks/useUpdateLogger'

export function UseLocalStorageDemo () {
    const [value, setValue] = useLocalStorage('name', '')
    useUpdateLogger(value)

    return (
        <>
            <h2>UseLocalStorageDemo</h2>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </>
    )

}
