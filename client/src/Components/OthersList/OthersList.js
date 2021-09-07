import React from 'react'
import OthersCard from './OthersCard/OthersCard'

const OthersList = ({others}) => {
    return (
        <>
            {others.map((other) => (
                <OthersCard other={other} key={other.id}/>
            ))} 
        </>
    )
}

export default OthersList
