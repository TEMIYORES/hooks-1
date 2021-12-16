import React, {useState} from 'react'
// import ClassMouse from './ClassMouse'
import HooksMouse from './HooksMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>toggle mouse position</button>
            {display && <HooksMouse/>}
        </div>
    )
}

export default MouseContainer
