import React from 'react'
import {Col, Card, CardGroup} from 'react-bootstrap'
import './styles.css'

const PerfectGradeCard = ({perfectGrade}) => {
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={perfectGrade.image} style={{width: '17.9rem', height: "17rem"}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{perfectGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {perfectGrade.series}</p>
                            <p className="infoBody">Release Date: {perfectGrade.releaseDate}</p>
                            <p className="infoBody">Price: {perfectGrade.price} Yen</p>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default PerfectGradeCard
