import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_REALGRADE} from '../../../utils/mutations'
import {REALGRADE_WISHLIST} from '../../../utils/mutations'
import {Col, Card, CardGroup, ButtonGroup, Button} from 'react-bootstrap'
import './styles.css'

const RealGradeCard = ({realGrade}) => {
    const [saveRealGrade] = useMutation(SAVE_REALGRADE)
    const [realGradeWishlist] = useMutation(REALGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRealGrades: 'No realgrades'
    })

    const saveToList = async (event) => {
        event.preventDefault()
        try {
            const response = await saveRealGrade({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRealGrades: response})
        } catch (error) {
            console.log(error)
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
            setProfileData({...ProfileData, realGradeWish: response})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="infoCard">
                        <Card.Img src={realGrade.image} style={{width: '17.9rem', height: "17rem"}} />
                        <Card.Body className="infoContent">
                            <h3 className="infoText">{realGrade.gunplaName}</h3>
                            <p className="infoBody">Series: {realGrade.series}</p>
                            <p className="infoBody">Release Date: {realGrade.releaseDate}</p>
                            <p className="infoBody">Price: {realGrade.price} Yen</p>
                        </Card.Body>
                        <ButtonGroup>
                            <Button onClick={saveToList}>Save</Button>
                            <Button onClick={saveToWishlist}>Add to Wishlist</Button>
                        </ButtonGroup>
                    </Card>
                </CardGroup>
            </Col>
        </>
    )
}

export default RealGradeCard
