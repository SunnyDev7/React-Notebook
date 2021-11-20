import React, { useState, useCallback } from 'react'

import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    }, [salary])

    return (
        <h2>
            <Title />                                                           {/* Child Component 1 */}
            <Count text="age" count={age} />                                    {/* Child Component 2 */}
            <Button handleClick={incrementAge}>Increment Age Button</Button>    {/* Child Component 3 */}
            <Count text="salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary Button</Button>
        </h2>
    )
}

export default ParentComponent
