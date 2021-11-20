import React, {Component} from "react"

//Use of Common Life cycle Methods.

export default class componentLifeCycles extends Component{

    constructor(){
        super()

        this.state = { //initial value
            count : 0,
            show: true
        }
    }

    increment = () => {
        this.setState({ //next value
            count : this.state.count + 1
        })
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() { //state change kariye
        console.log("Component Update");
      }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Click Me</button>
                
                <h1>{this.state.show ? <Child/> : null}</h1>
                <button onClick={this.toggle}>Click me to</button>
            </div>
        )
    }
};


export class Child extends Component {

    componentWillUnmount(){
        alert("This Child component will Unmount!!!")
        console.log("Component Unmounted")
    }
    
    render() {
        return (
            <div>
                I am child component.
            </div>
        )
    }
}


//order of invocation

// 1) constructor method

//2) render method

//3) componentDidMount (only once)

//4) componentDidUpdate (every time when component re-renders)

//5) componentWillUnmount (when component unmounts)



















