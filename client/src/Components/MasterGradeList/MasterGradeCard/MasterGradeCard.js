import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const MasterGradeCard = ({masterGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={masterGrade.image} style={{width: '17.9rem'}}/>
                    <Card.Body className="infoContent">
                        <h3 className="infoText">{masterGrade.gunplaName}</h3>
                        <p className="infoBody">Series: {masterGrade.series}</p>
                        <p className="infoBody">Release Date: {masterGrade.releaseDate}</p>
                        <p className="infoBody">Price: {masterGrade.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default MasterGradeCard
