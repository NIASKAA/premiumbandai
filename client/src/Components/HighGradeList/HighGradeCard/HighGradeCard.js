import React from 'react'
import {Col, Card, CardGroup} from 'react-bootstrap'
import './styles.css'

const HighGradeCard = ({highGrade}) => {
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={highGrade.image} style={{width: '17.9rem'}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{highGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {highGrade.series}</p>
                            <p className="infoBody">Release Date: {highGrade.releaseDate}</p>
                            <p className="infoBody">Price: {highGrade.price} Yen</p>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default HighGradeCard
