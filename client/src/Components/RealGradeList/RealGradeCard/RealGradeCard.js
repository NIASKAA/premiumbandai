import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_REALGRADE} from '../../../utils/mutations'
import {REALGRADE_WISHLIST} from '../../../utils/mutations'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import Auth from '../../../utils/auth'

const RealGradeCard = ({realGrade}) => {
    const [saveRealGrade] = useMutation(SAVE_REALGRADE)
    const [realGradeWishlist] = useMutation(REALGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRealGrades: 'No realgrades'
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
            const response = await saveRealGrade({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotRealGrades: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async () => {
        try {
            const response = await realGradeWishlist({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            console.log(response)
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, realGradeWish: response})
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
                        <Card.Img src={realGrade.image} style={{width: '17.9rem', height: "17rem"}} alt={realGrade.gunplaName}/>
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{realGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {realGrade.series}</p>
                            <p className="infoBody">Release Date: {realGrade.releaseDate}</p>
                            <p className="infoBody">Price: {realGrade.price} Yen</p>
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

export default RealGradeCard
