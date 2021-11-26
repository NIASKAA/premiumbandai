import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Row, Container, Spinner, InputGroup, FormControl} from 'react-bootstrap'
import {GET_ALL_HG} from '../../utils/queries'
import {GET_HGS} from '../../utils/state/actions'
import HighGradeList from '../../Components/HighGradeList/HighGradeList'
import Paginate from '../../Components/Pagination/Pagination'

const HighGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadHighGrades, setLoadHighGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_HG)
    let {getHG} = state
    const [AllHighGrade, setAllHighGrade] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

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

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllHighGrade.slice(indexOfFirstItem, indexOfLastItem)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setLoadHighGrades(false);
        }, 1000);
    }, [loadHighGrades]);

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getHG.length <= 1) {
            dispatch({type: GET_HGS, payload: data.getHG})
            setAllHighGrade(state.getHG)
        } else {
            setAllHighGrade(
                getHG.filter((highGrades) => 
                highGrades.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
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
                        value={searchGunpla}
                        aria-describedby="searchbar"
                        onChange={(event) => {
                            searchHandler(AllHighGrade)
                            setSearchGunpla(event.target.value)
                        }}
                    />
                </InputGroup>
                {loading && <Spinner animation="border" role="status"/>}
                <Row>
                    {!loadHighGrades && !loading && <HighGradeList highGrades={currentItems}/>}
                </Row>
            </Container>
            <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={AllHighGrade.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default HighGrade
