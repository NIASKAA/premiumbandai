import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_HIGHGRADE} from '../../../utils/mutations'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const HighGradeCard = ({highGrade}) => {
    const [saveHighGrade] = useMutation(SAVE_HIGHGRADE)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotHighGrades: 'No highgrades'
    })

    const saveToList = async (event) => {
        event.preventDefault()
        try {
            const response = await saveHighGrade({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotHighGrades: response})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={highGrade.image} style={{width: '17.9rem', height: "17rem"}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{highGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {highGrade.series}</p>
                            <p className="infoBody">Release Date: {highGrade.releaseDate}</p>
                            <p className="infoBody">Price: {highGrade.price} Yen</p>
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

export default HighGradeCard
