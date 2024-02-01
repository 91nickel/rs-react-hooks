import { UseLocalStorageDemo } from './components/useLocalStorageDemo'
import { UseLocalStorageDemo1 } from './components/useLocalStorageDemo1'
import { UseToggleDemo } from './components/useToggleDemo'
import { UseTimeoutDemo } from './components/useTimeoutDemo'
import { UseRefDemo } from './components/useRefDemo'
import { UseMemoDemo } from './components/useMemoDemo'
import { UseCallbackDemo } from './components/useCallbackDemo'
import { UseTransitionDemo } from './components/useTransitionDemo'
import { UseLayoutEffectDemo } from './components/useLayoutEffectDemo'
import { UseDeferredValueDemo } from './components/useDeferredValue'
import { UseDebounceDemo } from './components/useDebounceDemo'
import { UseUpdateEffectDemo } from './components/useUpdateEffectDemo'
import { UseArrayDemo } from './components/useArrayDemo'
import { UseThrottleDemo } from './components/useThrottleDemo'
import { UseFetchDemo } from './components/useFetchDemo'

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <UseLocalStorageDemo/>
                </div>
                <div>
                    <UseFetchDemo/>
                </div>
                {/*<div>*/}
                {/*    <UseThrottleDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseArrayDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseUpdateEffectDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseDebounceDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseLayoutEffectDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseRefDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseMemoDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseCallbackDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseLocalStorageDemo1 />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseToggleDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseTimeoutDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseTransitionDemo />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <UseDeferredValueDemo />*/}
                {/*</div>*/}
            </header>
        </div>
    )
}

export default App
