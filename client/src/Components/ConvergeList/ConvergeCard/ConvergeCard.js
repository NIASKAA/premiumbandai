import React from 'react'
import {Col, Card, CardGroup} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    return (    
        <>  
            <Col className="column">
                <Card className="infoCard">
                    <Card.Img src={converge.image} style={{ width: "18rem", height: "17rem"}}></Card.Img>
                    <Card.Body className="infoContent">
                        <p className="infoText">{converge.gunplaName}</p>
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
