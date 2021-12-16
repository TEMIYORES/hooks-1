import React from 'react'
import useCounter from '../hooks/useCounter';

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(10, 4);
    return (
        <div>
            <h1>Count -- {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
