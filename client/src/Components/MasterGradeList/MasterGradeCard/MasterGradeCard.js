import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_MASTERGRADE} from '../../../utils/mutations'
import {MASTERGRADE_WISHLIST} from '../../../utils/mutations'
import {Alert, Col, Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import Auth from '../../../utils/auth'

const MasterGradeCard = ({masterGrade}) => {
    const [saveMasterGrade] = useMutation(SAVE_MASTERGRADE)
    const [masterGradeWishlist] = useMutation(MASTERGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotMasterGrades: 'No mastergrade',
        masterGradeWish: 'No mastergrade'
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
            const response = await saveMasterGrade({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotMasterGrades: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async (event) => {
        event.preventDefault();
        try {
            const wishResponse = await masterGradeWishlist({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, masterGradeWish: wishResponse})
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
                        <Card.Img src={masterGrade.image} style={{width: '17.9rem', height: "17rem"}} alt={masterGrade.gunplaName}/>
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{masterGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {masterGrade.series}</p>
                            <p className="infoBody">Release Date: {masterGrade.releaseDate}</p>
                            <p className="infoBody">Price: {masterGrade.price} Yen</p>
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

export default MasterGradeCard
