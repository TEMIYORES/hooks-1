import React, {useState, useEffect} from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener('mousemove', logMousePosition)

        return()=> {
            console.log('Umounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X : {x} and Y : {y}
        </div>
    )
}

export default HooksMouse
