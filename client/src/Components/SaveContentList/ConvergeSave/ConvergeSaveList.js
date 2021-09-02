import React from 'react'
import ConvergeSaveTable from './ConvergeSaveTable/ConvergeSaveTable'

const ConvergeSaveList = ({converges}) => {
    
    return (
        <>
            {converges.map((converge) => (
                <ConvergeSaveTable converge={converge} key={converge.id} />
            ))}
        </>
    )
}

export default ConvergeSaveList
