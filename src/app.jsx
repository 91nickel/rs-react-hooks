import { UseLocalStorageDemo } from './components/useLocalStorageDemo'
import { UseToggleDemo } from './components/useToggleDemo'
import { UseTimeoutDemo } from './components/useTimeoutDemo'
import { UseRefDemo } from './components/useRefDemo'

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <UseRefDemo />
                </div>
                <div>
                    <UseLocalStorageDemo />
                </div>
                <div>
                    <UseToggleDemo />
                </div>
                <div>
                    <UseTimeoutDemo />
                </div>
            </header>
        </div>
    )
}

export default App
