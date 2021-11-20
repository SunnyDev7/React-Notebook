import React from 'react'

const Count = ({text, count}) => {

    console.log(`${text} Component`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
