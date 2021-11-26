import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_OTHERS} from '../../../utils/mutations'
import {OTHER_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'

const OthersCard = ({other}) => {
    const [saveOthers] = useMutation(SAVE_OTHERS)
    const [otherWishlist] = useMutation(OTHER_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRE100s: 'No others',
        re100Wish: 'no others'
    });

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
            const response = await saveOthers({
                variables: {
                    name: other.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotRE100s: response})
            console.log(ProfileData)
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async (event) => {
        event.preventDefault();
        try {
            const wishResponse = await otherWishlist({
                variables: {
                    name: other.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, re100Wish: wishResponse})
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
                        <Card.Img src={other.image} style={{ width: "18rem", height: "17rem"}}></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{other.gunplaName}</p>
                            <p className="infoBody">Series: {other.series}</p>
                            <p className="infoBody">Release Date: {other.releaseDate}</p>
                            <p className="infoBody">Price: {other.price} Yen</p>
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

export default OthersCard
