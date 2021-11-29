import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_ENSEMBLE} from '../../../utils/mutations'
import {ENSEMBLE_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'

const EnsembleCard = ({ensemble}) => {
    const [saveEnsemble] = useMutation(SAVE_ENSEMBLE)
    const [ensembleWishlist] = useMutation(ENSEMBLE_WISHLIST)
    const [show, setShow] = useState(true)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotEnsemble: 'No Ensemble',
        ensembleWish: 'No ensembles'
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
            const response = await saveEnsemble({
                variables: {
                    name: ensemble.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotEnsemble: response})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async (event) => {
        event.preventDefault();
        try {
            const wishResponse = await ensembleWishlist({
                variables: {
                    name: ensemble.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, ensembleWish: wishResponse})
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
                        <Card.Img src={ensemble.image} style={{ width: "18rem", height: "17rem"}} className="cardImg" alt={ensemble.gunplaName}></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{ensemble.gunplaName}</p>
                            <p className="infoBody">Series: {ensemble.series}</p>
                            <p className="infoBody">Release Date: {ensemble.releaseDate}</p>
                            <p className="infoBody">Price: {ensemble.price} Yen</p>
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

export default EnsembleCard
