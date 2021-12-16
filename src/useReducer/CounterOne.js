import React, {useState} from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <input type="text" value={count}/>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increase Count</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>decrease Count</button>
            <button onClick={()=>setCount(0)}>Reset Count</button>
        </div>
    )
}

export default CounterOne
