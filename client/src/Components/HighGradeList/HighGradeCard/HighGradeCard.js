import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const HighGradeCard = ({highGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={highGrade.image} style={{width: '17.9rem'}} />
                    <Card.Body>
                        <h3 className="infoText">{highGrade.gunplaName}</h3>
                        <p className="infoBody">Series: {highGrade.series}</p>
                        <p className="infoBody">Release Date: {highGrade.releaseDate}</p>
                        <p className="infoBody">Price: {highGrade.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default HighGradeCard
