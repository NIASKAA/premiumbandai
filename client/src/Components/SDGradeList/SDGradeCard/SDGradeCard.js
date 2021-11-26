import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_SDGRADE} from '../../../utils/mutations'
import {SDGRADE_WISHLIST} from '../../../utils/mutations'
import {Alert, Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import Auth from '../../../utils/auth'

const SDGradeCard = ({sdGrade}) => {
    const [saveSDGrade] = useMutation(SAVE_SDGRADE)
    const [sdGradeWishlist] = useMutation(SDGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotSDGrades: 'No sdgrades',
        sdGradeWish: 'No sdGrade'
    })

    const [show, setShow] = useState(true);
    const [errors, setErrors] = useState({
        addToSaveSuccess: null,
        addToSaveFail: null,
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveSDGrade({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotSDGrades: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
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
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, sdGradeWish: wishResponse})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToWishlistFail: true})
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
                        {errors.addToSaveSuccess && 
                            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                                Saved
                            </Alert>}
                        {errors.addToSaveFail && (
                        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                            Error
                        </Alert>)}
                        {errors.addToWishlistSuccess && 
                        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                            Added
                        </Alert>}
                        {errors.addToWishlistFail && (
                        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                            Error
                        </Alert>)}
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
