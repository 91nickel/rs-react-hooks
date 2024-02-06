import { useWindowScroll } from '../hooks/useWindowScroll'

export function UseWindowScrollDemo () {
    const [scroll, scrollTo] = useWindowScroll()

    return (
        <div style={{height: '200vh', width: '200vw'}}>
            <div style={{position: 'fixed'}}>
                <p>Scroll position x: {scroll.x}, y: {scroll.y}</p>
                <button onClick={() => scrollTo({y: 0})}>Scroll to top</button>
            </div>
        </div>
    )
}