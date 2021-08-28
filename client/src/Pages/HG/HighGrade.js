import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Row, Container, Spinner} from 'react-bootstrap'
import {GET_ALL_HG} from '../../utils/queries'
import {GET_HGS} from '../../utils/state/actions'
import HighGradeList from '../../Components/HighGradeList/HighGradeList'

const HighGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadHighGrades, setLoadHighGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_HG)
    let {getHG} = state
    const [AllHighGrade, setAllHighGrade] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_HGS, payload: data.getHG})
            if(getHG.length === 0) {
                setAllHighGrade(data.getHG)
            } else {
                setAllHighGrade(getHG)
            }
        }
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadHighGrades(false);
        }, 1000);
    });

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark"/>

    return (
        <>
            <Container>
                {loading && <Spinner animation="border" role="status"/>}
                <Row>
                    {!loadHighGrades && !loading && <HighGradeList highGrades={AllHighGrade}/>}
                </Row>
            </Container>
        </>
    )
}

export default HighGrade
