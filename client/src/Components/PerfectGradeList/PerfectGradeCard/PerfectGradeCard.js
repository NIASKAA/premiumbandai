import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const PerfectGradeCard = ({perfectGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={perfectGrade.image} style={{width: '17.9rem'}} />
                    <Card.Body>
                        <h3 className="infoText">{perfectGrade.gunplaName}</h3>
                        <p className="infoBody">Series: {perfectGrade.series}</p>
                        <p className="infoBody">Release Date: {perfectGrade.releaseDate}</p>
                        <p className="infoBody">Price: {perfectGrade.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default PerfectGradeCard
