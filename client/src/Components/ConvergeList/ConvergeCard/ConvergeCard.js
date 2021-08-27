import React from 'react'
import {Col, Card} from 'react-bootstrap'

const ConvergeCard = ({converge}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={converge.image} style={{ width: "17.9rem", height: "230px", marginBottom: '2%'}}></Card.Img>
                    <p>{converge.gunplaName}</p>
                </Card>
            </Col>
        </>
    )
}

export default ConvergeCard
