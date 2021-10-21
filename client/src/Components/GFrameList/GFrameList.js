import React from 'react'
import GFrameCard from './GFrameCard/GFrameCard'

const GFrameList = ({GFrames}) => {
    return (
        <>
            {GFrames.map((GFrame) => (
                <GFrameCard GFrame={GFrame} key={GFrame.id}/>
            ))}
        </>
    )
}

export default GFrameList
