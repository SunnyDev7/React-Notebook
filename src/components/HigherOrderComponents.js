//it's needed to share common functionality between components!!!

//HOC is A pattern where a function takes a component as an argument and returns a new component

// const NewComponent = higherOrderComponent(originalComponent) ...sudo code

// ex. const ironMan = withSuit(TonyStark)



import React from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        render(){
            return < OriginalComponent name='Sunny' />
        }
    }
    return NewComponent
}

export default UpdatedComponent