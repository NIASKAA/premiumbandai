import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_MASTERGRADE} from '../../../utils/mutations'
import {Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import './styles.css'

const MasterGradeCard = ({masterGrade}) => {
    const [saveMasterGrade] = useMutation(SAVE_MASTERGRADE)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotMasterGrades: 'No mastergrade'
    })

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveMasterGrade({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotMasterGrades: response})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={masterGrade.image} style={{width: '17.9rem', height: "17rem"}}/>
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{masterGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {masterGrade.series}</p>
                            <p className="infoBody">Release Date: {masterGrade.releaseDate}</p>
                            <p className="infoBody">Price: {masterGrade.price} Yen</p>
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

export default MasterGradeCard
