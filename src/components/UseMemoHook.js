//useMemo is a hook that will only compute one of the cache value 
//when one of the dependencies has changed


import React, {useState, useMemo} from 'react'

function UseMemoHook() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => { //useMemo will only execute this function depending on the change of state of counterOne
        let i = 0 //its just a function to make execution slow
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'odd'}</span> 
            </div>
            
            <div>
                <button onClick={incrementTwo}>Count two - {counterTwo}</button> 
            </div>
        </div>
    )
}

export default UseMemoHook


