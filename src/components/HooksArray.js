import React, {useState} from 'react'

function HooksArray() {
    const [Items, setItem] = useState([])
    const addNumber = () => {
        setItem([...Items, {id:Items.length, value: Math.trunc(Math.random()*10)}])
    }
    return (
      <div>
      <button onClick={addNumber}>Add a number</button>
        <ul>
          {Items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
}

export default HooksArray
