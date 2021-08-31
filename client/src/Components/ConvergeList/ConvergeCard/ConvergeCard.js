import React from 'react'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    return (    
        <>  
            <Col className="column">
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={converge.image} style={{ width: "18rem", height: "17rem"}}></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{converge.gunplaName}</p>
                            <p className="infoBody">Series: {converge.series}</p>
                            <p className="infoBody">Release Date: {converge.releaseDate}</p>
                            <p className="infoBody">Price: {converge.price} Yen</p>
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

export default ConvergeCard
