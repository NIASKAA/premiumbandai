import React from 'react'
import {Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import './styles.css'

const SDGradeCard = ({sdGrade}) => {
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={sdGrade.image} style={{width: '17.9rem', height: "17rem"}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{sdGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {sdGrade.series}</p>
                            <p className="infoBody">Release Date: {sdGrade.releaseDate}</p>
                            <p className="infoBody">Price: {sdGrade.price} Yen</p>
                        </Card.Body>
                        <ButtonGroup>
                            <Button>Save</Button>
                            <Button>Add to Wishlist</Button>
                        </ButtonGroup>
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default SDGradeCard
