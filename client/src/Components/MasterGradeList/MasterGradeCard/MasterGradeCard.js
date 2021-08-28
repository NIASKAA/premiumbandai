import React from 'react'
import {Col, Card} from 'react-bootstrap'

const MasterGradeCard = ({masterGrade}) => {
    return (
        <>
            <Col>
                <Card className="infoCard">
                    <Card.Img src={} style={{width: '17.9rem'}}/>
                    <Card.Body>
                        <h3 className="infoText">{""}</h3>
                        <p className="infoBody">Series: {""}</p>
                        <p className="infoBody">Release Date: {""}</p>
                        <p className="infoBody">Price: {""} Yen</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default MasterGradeCard
