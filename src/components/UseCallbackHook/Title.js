import React from 'react'

const Title = () => {

    console.log('Title Component')
    return (
        <div>
            useCallBack Hook Example
        </div>
    )
}

export default React.memo(Title)
