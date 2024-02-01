import { useHover } from '../hooks/useHover'

export function UseHoverDemo () {
    const {hovered, ref} = useHover()

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    )
}