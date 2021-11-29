import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_PERFECTGRADE} from '../../../utils/mutations'
import {PERFECTGRADE_WISHLIST} from '../../../utils/mutations'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import Auth from '../../../utils/auth'

const PerfectGradeCard = ({perfectGrade}) => {
    const [savePerfectGrade] = useMutation(SAVE_PERFECTGRADE)
    const [perfectGradeWishlist] = useMutation(PERFECTGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotPerfectGrades: 'No perfectgrade'
    })

    const [show, setShow] = useState(true);
    const [errors, setErrors] = useState({
        addToSaveSuccess: null,
        addToSaveFail: null,
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async (event) => {
        event.preventDefault()
        try {
            const response = await savePerfectGrade({
                variables: {
                    name: perfectGrade.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotPerfectGrades: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async () => {
        try {
            const response = await perfectGradeWishlist({
                variables: {
                    name: perfectGrade.gunplaName
                }
            })
            console.log(response)
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, perfectGradeWish: response})
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
                        <Card.Img src={perfectGrade.image} style={{width: '17.9rem', height: "17rem"}} alt={perfectGrade.gunplaName}/>
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{perfectGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {perfectGrade.series}</p>
                            <p className="infoBody">Release Date: {perfectGrade.releaseDate}</p>
                            <p className="infoBody">Price: {perfectGrade.price} Yen</p>
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

export default PerfectGradeCard
