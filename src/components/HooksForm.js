import React, {useState} from 'react'

function HooksForm() {
    const [name, setName ]= useState({firstName:'', lastName:''})

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(name)
    }
    return (
      <form>
        <input
          type="text"
          name={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <input
          type="text"
          name={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />

        <button type="submit" onClick={submitHandler}>
          submit
        </button>
      </form>
    );
}

export default HooksForm
