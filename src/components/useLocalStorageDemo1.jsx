import { useLocalStorage1 } from '../hooks/useLocalStorage1'
import { useUpdateLogger } from '../hooks/useUpdateLogger'

export function UseLocalStorageDemo1 () {
    const [value, setValue] = useLocalStorage1('name', '')
    useUpdateLogger(value)

    return (
        <>
            <h2>UseLocalStorageDemo1</h2>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </>
    )

}
