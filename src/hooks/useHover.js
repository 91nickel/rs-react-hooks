import { useEffect, useRef, useState } from 'react'

export function useHover () {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)

    const onMouseOver = () => setHovered(true)
    const onMouseOut = () => setHovered(false)

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver)
            ref.current.addEventListener('mouseout', onMouseOut)
            return () => {
                ref.current.removeEventListener('mouseover', onMouseOver)
                ref.current.removeEventListener('mouseout', onMouseOut)
            }
        }
    }, [])

    return {hovered, ref}
}