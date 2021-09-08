import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_CONVERGE} from '../../../utils/mutations'
import {CONVERGE_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Alert, Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const ConvergeCard = ({converge}) => {
    const [saveConverge] = useMutation(SAVE_CONVERGE)
    const [convergeWishlist] = useMutation(CONVERGE_WISHLIST)
    const [show, setShow] = useState(true);
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotConverges: "No Converges",
        convergeWish: 'No Converges'
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
            const response = await saveConverge({
                variables: {
                    name: converge.gunplaName
                }
            })
            setErrors({...errors, addToSaveSuccess: true})
            setProfileData({...ProfileData, gotConverges: response})
            console.log(ProfileData)
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToSaveFail: true})
        }
    }

    const saveToWishlist = async (event) => {
        event.preventDefault();
        try {
            const wishResponse = await convergeWishlist({
                variables: {
                    name: converge.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, convergeWish: wishResponse})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToWishlistFail: true})
        }
    }

    return (    
        <>  
            <Col className="column">
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={converge.image} style={{ width: "18rem", height: "17rem"}} className="cardImg"></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{converge.gunplaName}</p>
                            <p className="infoBody">Series: {converge.series}</p>
                            <p className="infoBody">Release Date: {converge.releaseDate}</p>
                            <p className="infoBody">Price: {converge.price} Yen</p>
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

export default ConvergeCard
