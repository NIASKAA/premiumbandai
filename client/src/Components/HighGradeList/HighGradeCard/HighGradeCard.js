import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_HIGHGRADE} from '../../../utils/mutations'
import {HIGHGRADE_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'

const HighGradeCard = ({highGrade}) => {
    const [saveHighGrade] = useMutation(SAVE_HIGHGRADE)
    const [highGradeWishlist] = useMutation(HIGHGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotHighGrades: 'No highgrades',
        highGradeWish: 'no highgrades'
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
            const response = await saveHighGrade({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotHighGrades: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async () => {
        try {
            const response = await highGradeWishlist({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, highGradeWish: response})
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
                        <Card.Img src={highGrade.image} style={{width: '17.9rem', height: "17rem"}} className="cardImg"/>
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{highGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {highGrade.series}</p>
                            <p className="infoBody">Release Date: {highGrade.releaseDate}</p>
                            <p className="infoBody">Price: {highGrade.price} Yen</p>
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

export default HighGradeCard
