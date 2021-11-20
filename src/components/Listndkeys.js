import React from 'react'

function Listndkeys() {
    
    const persons = [
        {
            id:1,
            name: "Bruce",
            age: 30,
            Skills: "React"
        },
        {
            id:2,
            name: "Clark",
            age: 28,
            Skills: "Angular"
        },
        {
            id:3,
            name: "Diana",
            age:25,
            Skills: "Vue"
        },
    ]
    
    return (
        <div>
            {persons.map( p => (
                <li key={p.id}>
                    {p.name} and {p.age} and {p.Skills}
                </li>
            ))}
        </div>
    )
}

export default Listndkeys
