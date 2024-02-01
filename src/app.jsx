import { UseLocalStorageDemo } from './components/useLocalStorageDemo'
import { UseToggleDemo } from './components/useToggleDemo'
import { UseTimeoutDemo } from './components/useTimeoutDemo'
import { UseRefDemo } from './components/useRefDemo'
import { UseMemoDemo } from './components/useMemoDemo'
import { UseCallbackDemo } from './components/useCallbackDemo'
import { UseTransitionDemo } from './components/useTransitionDemo'
import { UseLayoutEffectDemo } from './components/useLayoutEffectDemo'
import { UseDeferredValueDemo } from './components/useDeferredValue'

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <UseLayoutEffectDemo />
                </div>
                <div>
                    <UseRefDemo />
                </div>
                <div>
                    <UseMemoDemo />
                </div>
                <div>
                    <UseCallbackDemo />
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
                <div>
                    <UseTransitionDemo />
                </div>
                <div>
                    <UseDeferredValueDemo />
                </div>
            </header>
        </div>
    )
}

export default App
