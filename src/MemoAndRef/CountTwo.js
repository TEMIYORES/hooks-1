import React, {useState} from 'react'
import useDocTitle from '../hooks/useDocTitle';


function CountTwo() {
    const [count, setCount] = useState(0)

useDocTitle(count);
    return (
        <div>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Count -- {count}</button>
        </div>
    )
}

export default CountTwo
