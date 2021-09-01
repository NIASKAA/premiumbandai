import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_CONVERGE} from '../../../utils/mutations'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    const [saveConverge] = useMutation(SAVE_CONVERGE)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotConverges: "No Converges",
    });

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveConverge({
                variables: {
                    name: converge.gunplaName
                }
            })
            setProfileData({...ProfileData, gotConverges: response})
        } catch (error) {
            console.log(error)
        }
    }

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
                            <Button onClick={saveToList}>Save</Button>
                            <Button onClick={""}>Add to Wishlist</Button>
                        </ButtonGroup>
                    </Card>
                </CardGroup>
            </Col>
            
        </>
    )
}

export default ConvergeCard
