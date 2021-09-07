import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_OTHERS} from '../../../utils/mutations'
import {OTHER_WISHLIST} from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const OthersCard = ({other}) => {
    const [saveOthers] = useMutation(SAVE_OTHERS)
    const [otherWishlist] = useMutation(OTHER_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRE100s: 'No others',
        re100Wish: 'no others'
    });

    const saveToList = async (event) => {
        event.preventDefault();
        try {
            const response = await saveOthers({
                variables: {
                    name: other.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRE100s: response})
            console.log(ProfileData)
        } catch (error) {
            console.log(error)
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
            setProfileData({...ProfileData, re100Wish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Col className="column">
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={other.image} style={{ width: "18rem", height: "17rem"}}></Card.Img>
                        <Card.Body className="infoContent">
                            <p className="infoText">{other.gunplaName}</p>
                            <p className="infoBody">Series: {other.series}</p>
                            <p className="infoBody">Release Date: {other.releaseDate}</p>
                            <p className="infoBody">Price: {other.price} Yen</p>
                        </Card.Body>
                        {Auth.loggedIn() ? (
                            <>
                                <ButtonGroup>
                                    <Button onClick={saveToList}>Save</Button>
                                    <Button onClick={saveToWishlist}>Add to Wishlist</Button>
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
