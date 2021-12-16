import React, {useState} from 'react'

function HooksCounterTwo() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const incrementCount = () =>{
        for(let i=0; i < 5; i++)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            Count: {count}
            <button onClick={() =>setCount(initialCount)}>Reset</button>
            <button onClick={() =>setCount(count + 1)}>increment by 1</button>
            <button onClick={() =>setCount(count - 1)}>decrement by 1</button>
            <button onClick={incrementCount}>increment by 5</button>
        </div>
    )
}

export default HooksCounterTwo
