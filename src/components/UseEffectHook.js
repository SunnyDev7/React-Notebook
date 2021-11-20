// //class component

// import React, { Component } from 'react'

// class UseEffectHook extends Component {
    
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     componentDidMount(){
//         document.title = `Clicked ${this.state.count} times`
//     }

//     componentDidUpdate(){
//         document.title = `Clicked ${this.state.count} times`
//     }
    
//     setCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <button onClick={this.setCount}>Click</button>
//             </div>
//         )
//     }
// }

// export default UseEffectHook




//better approach

import React, { useState, useEffect } from 'react'

function UseEffectHook() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState("Sunny")

    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [name])
    
    return (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}>Click</button>
          <div>
            {name}
            <button onClick={() => setName("Payal")}>Change name</button>  
          </div>
        </div>
    )
}

export default UseEffectHook

