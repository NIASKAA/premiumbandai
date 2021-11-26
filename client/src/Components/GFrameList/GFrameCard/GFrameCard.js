import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_GFRAME} from '../../../utils/mutations'
import {GFRAME_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'

const GFrameCard = ({GFrame}) => {
    const [saveGFrame] = useMutation(SAVE_GFRAME)
    const [gFrameWishlist] = useMutation(GFRAME_WISHLIST)
    const [show, setShow] = useState(true);
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotGFrame: 'No GFrame',
        gFrameWish: 'No GFrame'
    });

    const [errors, setErrors] = useState({
        addToSaveSuccess: null,
        addToSaveFail: null,
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveGFrame({
                variables: {
                    name: GFrame.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotGFrame: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async (event) => {
        event.preventDefault()
        try {
            const wishResponse = await gFrameWishlist({
                variables: {
                    name: GFrame.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, gFrameWish: wishResponse})
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
                        <Card.Img src={GFrame.image} style={{ width: "18rem", height: "17rem"}} className="cardImg"></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{GFrame.gunplaName}</p>
                            <p className="infoBody">Series: {GFrame.series}</p>
                            <p className="infoBody">Release Date: {GFrame.releaseDate}</p>
                            <p className="infoBody">Price: {GFrame.price} Yen</p>
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

export default GFrameCard
