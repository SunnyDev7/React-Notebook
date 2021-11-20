// //Class Component
// import React, { Component } from 'react'

// class UseStateHook extends Component {
    
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    
//     setCount = () => {
//         this.setState({
//             count : this.state.count + 1
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

// export default UseStateHook


//Better approach is to use Hooks

import React, { useState } from 'react'

function UseStateHook() {

    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Click</button>           
        </div>
    )
}

export default UseStateHook
