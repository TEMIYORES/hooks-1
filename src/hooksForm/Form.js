import React, { useEffect, useRef } from 'react'
import useInput from '../hooks/useInput'

function Form() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const inputRef = useRef()
    useEffect(()=> {
        inputRef.current.focus()
    }, [])
const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
}
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName :</label>
                <input type="text" ref={inputRef} {... bindFirstName}/>
            </div>
            <div>
                <label>LastName :</label>
                <input type="text" {... bindLastName}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form
