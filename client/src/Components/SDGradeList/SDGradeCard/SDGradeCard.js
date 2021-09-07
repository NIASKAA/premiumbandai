import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_SDGRADE} from '../../../utils/mutations'
import {SDGRADE_WISHLIST} from '../../../utils/mutations'
import {Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import Auth from '../../../utils/auth'
import './styles.css'

const SDGradeCard = ({sdGrade}) => {
    const [saveSDGrade] = useMutation(SAVE_SDGRADE)
    const [sdGradeWishlist] = useMutation(SDGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotSDGrades: 'No sdgrades',
        sdGradeWish: 'No sdGrade'
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

    const saveToWishlist = async (event) => {
        event.preventDefault();
        try {
            const wishResponse = await sdGradeWishlist({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, sdGradeWish: wishResponse})
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
                        {Auth.loggedIn() ? (
                            <>
                                <ButtonGroup>
                                    <Button onClick={saveToList} variant="light" className="saveBtns">Save</Button>
                                    <Button onClick={saveToWishlist} variant="light" className="wishBtns">Add to Wishlist</Button>
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

export default SDGradeCard
