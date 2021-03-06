import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner, InputGroup, FormControl} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_SD} from '../../utils/queries'
import {GET_SDS} from '../../utils/state/actions'
import SDGradeList from '../../Components/SDGradeList/SDGradeList'
import Paginate from '../../Components/Pagination/Pagination' 

const SDGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadSDGrade, setLoadSDGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_SD)
    let {getSD} = state
    const [AllSDGrade, setAllSDGrade] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

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


    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllSDGrade.slice(indexOfFirstItem, indexOfLastItem)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setLoadSDGrade(false)
        }, 1000)
    }, [loadSDGrade])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getSD.length <= 1) {
            dispatch({type: GET_SDS, payload: data.getSD})
            setAllSDGrade(state.getSD)
        } else {
            setAllSDGrade(
                getSD.filter((sdGrade) => 
                sdGrade.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
            )
        }
    }

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark"/>

    return (
        <>
            <Container>
                <InputGroup className="mx-auto searchInput">
                    <FormControl
                        placeholder="Search a Gunpla"
                        aria-label="searchbar"
                        aria-describedby="searchbar"
                        value={searchGunpla}
                        onChange={(event) => {
                            setSearchGunpla(event.target.value)
                            searchHandler(searchGunpla)
                        }}
                    />
                </InputGroup>
                {loadSDGrade && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadSDGrade && !loading && <SDGradeList sdGrades={currentItems} />}
                </Row>
            </Container>
            <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={currentItems.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default SDGrade
