import React, {useState, useEffect} from 'react'
import {GET_SAVE_CONVERGE} from '../../utils/queries'
import {useQuery} from "@apollo/client"
import {Accordion, Table} from 'react-bootstrap'
import './styles.css'

const Profile = () => {
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    const [loadConverge, setLoadConverge] = useState(undefined)

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        }
        console.log(data)
    }, [loading, data])

    return (
        <>  
            <h3>Already have</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Saved Converges</Accordion.Header>
                    <Accordion.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Price</th>
                                    <th>Release Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading && loadConverge &&
                                loadConverge.map((converge) => (
                                    <tr key={converge.id}>
                                        <td>{converge.gunplaName}</td>
                                        <td>{converge.series}</td>
                                        <td>{converge.price}</td>
                                        <td>{converge.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Saved High Grades</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Saved Real Grades</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Saved Master Grades</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Saved Perfect Grades</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Saved SD</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br/>

            <h3>Wishlist</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Converge Wishlist</Accordion.Header>
                    <Accordion.Body>
                   
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>High Grade Wishlist</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Real Grades Wishlist</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Master Grades Wishlist</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Perfect Grade Wishlist</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>SD Wishlist</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Profile
