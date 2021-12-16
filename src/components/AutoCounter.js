import React, {useState, useEffect} from 'react'

function AutoCounter() {
    const [count, setCount] = useState(0)
    const [display, setDisplay] = useState(false)
    const tick = () => {
        setCount(prevCount => prevCount + 1);
        
    }
    useEffect(()=>{
        if(display){
         const interval= setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }}else{
            return null
        }
    })
    return (
        <div>
           <h1>{count}</h1> 
           <button onClick={()=> setDisplay(!display)}>Start Count</button>
        </div>
    )
}

export default AutoCounter
