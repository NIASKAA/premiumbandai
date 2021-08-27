import React from 'react'
import { Card, Col} from "react-bootstrap";
import ConvergeCard from './ConvergeCard/ConvergeCard'
const ConvergeList = ({converges}) => {
    return (
        <>
            {converges.map((converge) => {
                <ConvergeCard converge={converge} key={converge.id}/>
            })}
        </>
    )
}

export default ConvergeList
