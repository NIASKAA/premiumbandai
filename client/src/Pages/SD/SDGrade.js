import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_SD} from '../../utils/queries'
import {GET_SDS} from '../../utils/state/actions'
import SDGradeList from '../../Components/SDGradeList/SDGradeList'
 
const SDGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadSDGrade, setLoadSDGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_SD)
    let {getSD} = state
    const [AllSDGrade, setAllSDGrade] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_SDS, payload: data.getSD})
            if(getSD.length === 0) {
                setAllSDGrade(data.getSD)
            } else {
                setAllSDGrade(getSD)
            }
        }
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadSDGrade(false)
        })
    }, 1000)

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark"/>

    return (
        <>
            <Container>
                {loadSDGrade && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadSDGrade && !loading && <SDGradeList sdGrades={AllSDGrade} />}
                </Row>
            </Container>
        </>
    )
}

export default SDGrade
