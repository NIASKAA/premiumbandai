import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={converge.image} style={{ width: "17.9rem"}}></Card.Img>
                    <Card.Body className="infoContent">
                        <h3 className="infoText">{converge.gunplaName}</h3>
                        <p className="infoBody">Series: {converge.series}</p>
                        <p className="infoBody">Release Date: {converge.releaseDate}</p>
                        <p className="infoBody">Price: {converge.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ConvergeCard
