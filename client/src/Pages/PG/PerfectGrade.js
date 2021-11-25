import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner, InputGroup, FormControl} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_PG} from '../../utils/queries'
import {GET_PGS} from '../../utils/state/actions'
import PerfectGradeList from '../../Components/PerfectGradeList/PerfectGradeList'
import Paginate from '../../Components/Pagination/Pagination'


const PerfectGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
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
            setLoadPerfectGrades(false)
        }, 1000)
    }, [loadPerfectGrades])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getPG.length <= 1) {
            dispatch({type: GET_PGS, payload: data.getPG})
            setAllPerfectGrade(state.getPG)
        } else {
            setAllPerfectGrade(
                getPG.filter((perfectGrades) => 
                perfectGrades.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
            )
        }
    }

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark"/>

    return (
        <>
            <Container>
                <InputGroup>
                    <FormControl
                        placeholder="Search a Gunpla"
                        aria-label="searchbar"
                        aria-describedby="searchbar"
                        value={searchGunpla}
                        onChange={(event) => {
                            setSearchGunpla(event.target.value);
                            searchHandler(AllPerfectGrade);
                        }}
                    />
                </InputGroup>
                {loadPerfectGrades && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadPerfectGrades && !loading && <PerfectGradeList perfectGrades={currentItems} />}
                </Row>
          </Container>
          <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={AllPerfectGrade.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default PerfectGrade
