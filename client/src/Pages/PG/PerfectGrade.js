import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_PG} from '../../utils/queries'
import {GET_PGS} from '../../utils/state/actions'
import PerfectGradeList from '../../Components/PerfectGradeList/PerfectGradeList'
import Pagination from '../../Components/Pagination/Pagination'

const PerfectGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadPerfectGrades, setLoadPerfectGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_PG)
    let {getPG} = state 
    const [AllPerfectGrade, setAllPerfectGrade] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_PGS, payload: data.getPG})
            if(getPG.length === 0) {
                setAllPerfectGrade(data.getPG)
            } else {
                setAllPerfectGrade(getPG)
            }
        }
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllPerfectGrade.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setAllPerfectGrade(false)
        }, 1000)
    })

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark"/>

    return (
        <>
            <Container>
              {loadPerfectGrades && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadPerfectGrades && !loading && <PerfectGradeList perfectGrades={currentItems} />}
                </Row>
          </Container>
          <Pagination  
                itemsPerPage={itemsPerPage}
                totalItems={AllPerfectGrade.length}
                paginate={paginate}
            />
        </>
    )
}

export default PerfectGrade
