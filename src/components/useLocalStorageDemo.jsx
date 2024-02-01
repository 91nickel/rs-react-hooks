import { useLocalStorage } from '../hooks/useLocalStorage'

export function UseLocalStorageDemo () {
    const [token, {setItem, removeItem}] = useLocalStorage('token')

    return (
        <div>
            <p>
                Твой токен: {token}
            </p>
            <div>
                <button onClick={() => setItem('new-token')}>
                    Задать токен
                </button>
                <button onClick={() => removeItem()}>
                    Удалить токен
                </button>
            </div>
        </div>
    )
}