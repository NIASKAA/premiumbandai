import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const RealGradeCard = ({realGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={realGrade.image} style={{width: '17.9rem'}} />
                    <Card.Body>
                        <h3 className="infoText">{realGrade.gunplaName}</h3>
                        <p className="infoBody">Series: {realGrade.series}</p>
                        <p className="infoBody">Release Date: {realGrade.releaseDate}</p>
                        <p className="infoBody">Price: {realGrade.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default RealGradeCard
