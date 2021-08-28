import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './styles.css'

const SDGradeCard = ({sdGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={sdGrade.image} style={{width: '17.9rem'}} />
                    <Card.Body>
                        <h3 className="infoText">{sdGrade.gunplaName}</h3>
                        <p className="infoBody">Series: {sdGrade.series}</p>
                        <p className="infoBody">Release Date: {sdGrade.releaseDate}</p>
                        <p className="infoBody">Price: {sdGrade.price} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default SDGradeCard
