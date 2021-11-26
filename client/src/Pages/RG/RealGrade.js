import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner, InputGroup, FormControl} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_RG} from '../../utils/queries'
import {GET_RGS} from '../../utils/state/actions'
import RealGradeList from '../../Components/RealGradeList/RealGradeList'
import Paginate from '../../Components/Pagination/Pagination'

const RealGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadRealGrade, setLoadRealGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_RG)
    let {getRG} = state
    const [AllRealGrade, setAllRealGrade] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_RGS, payload: data.getRG})
            if(getRG.length === 0) {
                setAllRealGrade(data.getRG)
            } else {
                setAllRealGrade(getRG)
            }
        }
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllRealGrade.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    useEffect(() => {
        setTimeout(() => {
            setLoadRealGrade(false)
        }, 2000)
    }, [loadRealGrade])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getRG.length <= 1) {
            dispatch({type: GET_RGS, payload: data.getRG})
            setAllRealGrade(state.getRG)
        } else {
            setAllRealGrade(
                getRG.filter((realGrades) => 
                realGrades.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
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
                            searchHandler(AllRealGrade)
                        }}
                    />
                </InputGroup>
                {loadRealGrade && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadRealGrade && !loading && <RealGradeList realGrades={currentItems} />}
                </Row>
            </Container>
            <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={AllRealGrade.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default RealGrade
