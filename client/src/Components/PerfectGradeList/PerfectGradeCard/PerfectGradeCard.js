import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_PERFECTGRADE} from '../../../utils/mutations'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import Auth from '../../../utils/auth'
import './styles.css'

const PerfectGradeCard = ({perfectGrade}) => {
    const [savePerfectGrade] = useMutation(SAVE_PERFECTGRADE)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotPerfectGrades: 'No perfectgrade'
    })

    const saveToList = async (event) => {
        event.preventDefault()
        try {
            const response = await savePerfectGrade({
                variables: {
                    name: perfectGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotPerfectGrades: response})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={perfectGrade.image} style={{width: '17.9rem', height: "17rem"}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{perfectGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {perfectGrade.series}</p>
                            <p className="infoBody">Release Date: {perfectGrade.releaseDate}</p>
                            <p className="infoBody">Price: {perfectGrade.price} Yen</p>
                        </Card.Body>
                        {Auth.loggedIn ? (
                            <ButtonGroup>
                                <Button onClick={saveToList}>Save</Button>
                                <Button onClick={""}>Add to Wishlist</Button>
                            </ButtonGroup>
                        ) : (
                            <>
                            </>
                        )}
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default PerfectGradeCard
