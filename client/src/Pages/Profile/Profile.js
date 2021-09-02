import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {GET_SAVE_CONVERGE} from '../../utils/queries'
import {GET_SAVED_CONVERGE} from '../../utils/state/actions'
import {useQuery} from "@apollo/client"
import ConvergeSaveList from '../../Components/SaveContentList/ConvergeSave/ConvergeSaveList'
import {Accordion, Table, Spinner} from 'react-bootstrap'
import './styles.css'

const Profile = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadConverge, setLoadConverge] = useState(true)
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    let {getUserConverge} = state
    const [AllUserConverge, setAllUserConverge] = useState(() => [])


    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_SAVED_CONVERGE, payload: data.getUserConverge})
            if(getUserConverge.length === 0){
                setAllUserConverge(data.getUserConverge)
            } else {
                setAllUserConverge(getUserConverge)
            }
        }
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
          setLoadConverge(false);
        }, 1000);
      });

    return (
        <>  
            <h3>Already have</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Saved Converges</Accordion.Header>
                    <Accordion.Body>
                        
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
