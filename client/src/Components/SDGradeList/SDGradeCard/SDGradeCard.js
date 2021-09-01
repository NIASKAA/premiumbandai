import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_SDGRADE} from '../../../utils/mutations'
import {Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import './styles.css'

const SDGradeCard = ({sdGrade}) => {
    const [saveSDGrade] = useMutation(SAVE_SDGRADE)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotSDGrades: 'No sdgrades'
    })

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveSDGrade({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotSDGrades: response})
        } catch (error) {
            console.log(error)
        }
    }
    
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
                    </Card>
                    <ButtonGroup>
                        <Button onClick={saveToList}>Save</Button>
                        <Button onClick={""}>Add to Wishlist</Button>
                    </ButtonGroup>
                </CardGroup>
            </Col>
        </>
    )
}

export default SDGradeCard
