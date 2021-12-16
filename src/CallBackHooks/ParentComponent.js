import React, {useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(
        () => {
        setAge(prevAge => prevAge + 1)
    },
        []
    )
    const incrementSalary = useCallback(
        () => {
        setSalary(prevSalary => prevSalary + 1000)
    },[]
        )
    return (
      <div>
        <Title />
        <Count text="age" count={age} />
        <Button text="age" click={incrementAge}>
          Increase Age
        </Button>
        <Count text="salary" count={salary} />
        <Button text="salary" click={incrementSalary}>
          Increase Salary
        </Button>
      </div>
    );
}

export default ParentComponent
