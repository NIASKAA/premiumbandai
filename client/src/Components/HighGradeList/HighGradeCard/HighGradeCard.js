import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_HIGHGRADE} from '../../../utils/mutations'
import {HIGHGRADE_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const HighGradeCard = ({highGrade}) => {
    const [saveHighGrade] = useMutation(SAVE_HIGHGRADE)
    const [highGradeWishlist] = useMutation(HIGHGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotHighGrades: 'No highgrades',
        highGradeWish: 'no highgrades'
    })

    const saveToList = async (event) => {
        event.preventDefault();
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

    const saveToWishlist = async () => {
        try {
            const response = await highGradeWishlist({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            console.log(response)
            setProfileData({...ProfileData, highGradeWish: response})
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
                        {Auth.loggedIn() ? (
                            <>
                                <ButtonGroup>
                                    <Button onClick={saveToList}>Save</Button>
                                    <Button onClick={saveToWishlist}>Add to Wishlist</Button>
                                </ButtonGroup>
                            </>
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

export default HighGradeCard
