import React, {useState, useEffect} from 'react'
import {useQuery, useMutation} from "@apollo/client"
import {GET_SAVE_CONVERGE, 
    GET_SAVE_HIGHGRADE, 
    GET_SAVE_REALGRADE, 
    GET_SAVE_MASTERGRADE, 
    GET_SAVE_PERFECTGRADE, 
    GET_SAVE_SDGRADE, 
    GET_CONVERGE_WISH, 
    GET_HIGHGRADE_WISH, 
    GET_REALGRADE_WISH, 
    GET_MASTERGRADE_WISH, 
    GET_PERFECTGRADE_WISH,
    GET_SDGRADE_WISH} from '../../utils/queries'
import {DELETE_CONVERGE_SAVE} from '../../utils/mutations'
import {Accordion, Table, Button} from 'react-bootstrap'
import './styles.css'

const Profile = () => {
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    const {loading: loadHigh, data: highData} = useQuery(GET_SAVE_HIGHGRADE)
    const {loading: loadReal, data: realData} = useQuery(GET_SAVE_REALGRADE)
    const {loading: loadMaster, data: masterData} = useQuery(GET_SAVE_MASTERGRADE)
    const {loading: loadPerfect, data: perfectData} = useQuery(GET_SAVE_PERFECTGRADE)
    const {loading: loadSD, data: sdData} = useQuery(GET_SAVE_SDGRADE)
    const {loading: loadConvergeWish, data: convergeWishData} = useQuery(GET_CONVERGE_WISH)
    const {loading: loadHighWish, data: highWishData} = useQuery(GET_HIGHGRADE_WISH)
    const {loading: loadRealWish, data: realWishData} = useQuery(GET_REALGRADE_WISH)
    const {loading: loadMasterWish, data: masterWishData} = useQuery(GET_MASTERGRADE_WISH)
    const {loading: loadPerfectGradeWish, data: perfectGradeWishData} = useQuery(GET_PERFECTGRADE_WISH)
    const {loading: loadSDGradeWish, data: sdGradeWishData} = useQuery(GET_SDGRADE_WISH)
    const [deleteConvergeSave] = useMutation(DELETE_CONVERGE_SAVE)
    const [loadConverge, setLoadConverge] = useState(undefined)
    const [loadHighGrade, setLoadHighGrade] = useState(undefined)
    const [loadRealGrade, setLoadRealGrade] = useState(undefined)
    const [loadMasterGrade, setLoadMasterGrade] = useState(undefined)
    const [loadPerfectGrade, setLoadPerfectGrade] = useState(undefined)
    const [loadSDGrade, setLoadSDGrade] = useState(undefined)
    const [loadConvergeList, setLoadConvergeList] = useState(undefined)
    const [loadHighList, setLoadHighList] = useState(undefined)
    const [loadRealList, setLoadRealList]= useState(undefined)
    const [loadMasterList, setLoadMasterList] = useState(undefined)
    const [loadPerfectGradeList, setLoadPerfectGradeList] = useState(undefined)
    const [loadSDGradeList, setLoadSDGradeList] = useState(undefined)

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

    useEffect(() => {
        if(!loadPerfect && perfectData) {
            setLoadPerfectGrade(perfectData.getUserPerfectGrade.gotPerfectGrades)
        }
    }, [loadPerfect, perfectData])

    useEffect(() => {
        if(!loadSDGrade && sdData) {
            setLoadSDGrade(sdData.getUserSDGrade.gotSDGrades)
        }
    }, [loadSD, sdData])

    useEffect(() => {
        if(!loadConvergeList && convergeWishData) {
            setLoadConvergeList(convergeWishData.getUserConvergeWishlist.convergeWish)
        }
    }, [loadConvergeWish, convergeWishData])

    useEffect(() => {
        if(!loadHighList && highWishData) {
            setLoadHighList(highWishData.getUserHighWishlist.highGradeWish)
        }
    }, [loadHighWish, highWishData])

    useEffect(() => {
        if(!loadRealList && realWishData) {
            setLoadRealList(realWishData.getUserRealWishlist.realGradeWish)
        }
    }, [loadRealWish, realWishData])

    useEffect(() => {
        if(!loadMasterList && masterWishData) {
            setLoadMasterList(masterWishData.getUserMasterWishlist.masterGradeWish)
        }
    }, [loadMasterList, masterWishData])

    useEffect(() => {
        if(!loadPerfectGradeList && perfectGradeWishData) {
            setLoadPerfectGradeList(perfectGradeWishData.getUserPerfectWishlist.perfectGradeWish)
        }
    }, [loadPerfectGradeList, perfectGradeWishData])

    useEffect(() => {
        if(!loadSDGradeList && sdGradeWishData) {
            setLoadSDGradeList(sdGradeWishData.getUserSDWishlist.sdGradeWish)
        }
    }, [loadSDGradeList, sdGradeWishData])

    const deleteItem = (id) => {
        try {
            deleteConvergeSave({
                variables: {
                    convergeID: id
                }
            })
        } catch (error) {
            console.log(error)
        }
        window.location.reload();   
    }

    return (
        <>  
            <h3>Already have</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Saved Converges</Accordion.Header>
                    <Accordion.Body>
                    {!loading && loadConverge &&
                                loadConverge.map((converge) => (
                                    <div key={converge.id}>
                                        <h6>{converge.gunplaName}</h6>
                                        <p>{converge.series}</p>
                                        <p>{converge.price}</p>
                                        <p>{converge.releaseDate}</p>
                                        <Button onClick={() => deleteItem(converge._id)} variant="danger"></Button>
                                    </div>
                                ))}
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
                                {!loadPerfect && loadPerfectGrade &&
                                loadPerfectGrade.map((perfect) => (
                                    <tr key={perfect.id}>
                                        <td>{perfect.gunplaName}</td>
                                        <td>{perfect.series}</td>
                                        <td>{perfect.price}</td>
                                        <td>{perfect.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Saved SD</Accordion.Header>
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
                                {!loadSD && loadSDGrade &&
                                loadSDGrade.map((SDGrade) => (
                                    <tr key={SDGrade.id}>
                                        <td>{SDGrade.gunplaName}</td>
                                        <td>{SDGrade.series}</td>
                                        <td>{SDGrade.price}</td>
                                        <td>{SDGrade.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br/>

            <h3>Wishlist</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Converge Wishlist</Accordion.Header>
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
                                {!loadConvergeWish && loadConvergeList &&
                                loadConvergeList.map((converge) => (
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
                    <Accordion.Header>High Grade Wishlist</Accordion.Header>
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
                                {!loadHighWish && loadHighList &&
                                loadHighList.map((highGrade) => (
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
                    <Accordion.Header>Real Grades Wishlist</Accordion.Header>
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
                                {!loadRealWish && loadRealList &&
                                loadRealList.map((realGrade) => (
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
                    <Accordion.Header>Master Grades Wishlist</Accordion.Header>
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
                                {!loadMasterWish && loadMasterList &&
                                loadMasterList.map((masterGrade) => (
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
                    <Accordion.Header>Perfect Grade Wishlist</Accordion.Header>
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
                                {!loadPerfectGradeWish && loadPerfectGradeList &&
                                loadPerfectGradeList.map((perfect) => (
                                    <tr key={perfect.id}>
                                        <td>{perfect.gunplaName}</td>
                                        <td>{perfect.series}</td>
                                        <td>{perfect.price}</td>
                                        <td>{perfect.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>SD Wishlist</Accordion.Header>
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
                                {!loadSDGradeWish && loadSDGradeList &&
                                loadSDGradeList.map((SDGrade) => (
                                    <tr key={SDGrade.id}>
                                        <td>{SDGrade.gunplaName}</td>
                                        <td>{SDGrade.series}</td>
                                        <td>{SDGrade.price}</td>
                                        <td>{SDGrade.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Profile
