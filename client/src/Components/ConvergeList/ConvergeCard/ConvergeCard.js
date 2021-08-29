import React from 'react'
import {Col, Card, CardGroup} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={converge.image} style={{ width: "17.9rem", height: "17rem"}}></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{converge.gunplaName}</p>
                            <p className="infoBody">Series: {converge.series}</p>
                            <p className="infoBody">Release Date: {converge.releaseDate}</p>
                            <p className="infoBody">Price: {converge.price} Yen</p>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default ConvergeCard
