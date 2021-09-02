import React, {useState, useEffect} from 'react'
import {GET_SAVE_CONVERGE, 
    GET_SAVE_HIGHGRADE, 
    GET_SAVE_REALGRADE, 
    GET_SAVE_MASTERGRADE, 
    GET_SAVE_PERFECTGRADE, 
    GET_SAVE_SDGRADE} from '../../utils/queries'
import {useQuery} from "@apollo/client"
import {Accordion, Table} from 'react-bootstrap'
import './styles.css'

const Profile = () => {
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    const {loading: loadHigh, data: highData} = useQuery(GET_SAVE_HIGHGRADE)
    const {loading: loadReal, data: realData} = useQuery(GET_SAVE_REALGRADE)
    const {loading: loadMaster, data: masterData} = useQuery(GET_SAVE_MASTERGRADE)
    const [loadConverge, setLoadConverge] = useState(undefined)
    const [loadHighGrade, setLoadHighGrade] = useState(undefined)
    const [loadRealGrade, setLoadRealGrade] = useState(undefined)
    const [loadMasterGrade, setLoadMasterGrade] = useState(undefined)

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        }
    }, [loading, data])

    useEffect(() => {
        if(!loadHigh && highData) {
            setLoadHighGrade(highData.getUserHighGrade.gotHighGrades)
        }
    }, [loadHigh, highData])

    useEffect(() => {
        if(!loadReal && realData) {
            setLoadRealGrade(realData.getUserRealGrade.gotRealGrades)
        }
    }, [loadReal, realData])

    useEffect(() => {
        if(!loadMaster && masterData) {
            setLoadMasterGrade(masterData.getUserMasterGrade.gotMasterGrades)
        }
    }, [loadMaster, masterData])

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
                                {!loadHigh && loadHighGrade &&
                                loadHighGrade.map((highGrade) => (
                                    <tr key={highGrade.id}>
                                        <td>{highGrade.gunplaName}</td>
                                        <td>{highGrade.series}</td>
                                        <td>{highGrade.price}</td>
                                        <td>{highGrade.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Saved Real Grades</Accordion.Header>
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
                                {!loadReal && loadRealGrade &&
                                loadRealGrade.map((realGrade) => (
                                    <tr key={realGrade.id}>
                                        <td>{realGrade.gunplaName}</td>
                                        <td>{realGrade.series}</td>
                                        <td>{realGrade.price}</td>
                                        <td>{realGrade.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Saved Master Grades</Accordion.Header>
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
                                {!loadMaster && loadMasterGrade &&
                                loadMasterGrade.map((masterGrade) => (
                                    <tr key={masterGrade.id}>
                                        <td>{masterGrade.gunplaName}</td>
                                        <td>{masterGrade.series}</td>
                                        <td>{masterGrade.price}</td>
                                        <td>{masterGrade.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
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
