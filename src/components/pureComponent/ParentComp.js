import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
          name: "Sunny"   
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Sunny"
            })
        }, 4000)
    }
    
    render() {
        console.log('****************Parent Comp render********************')
        return (
            <div>
              Parent Component 
              <RegComp name={this.state.name} />
              <PureComp name={this.state.name} />
              <MemoComp name={this.state.name} /> 
            </div>
        )
    }
}

export default ParentComp
