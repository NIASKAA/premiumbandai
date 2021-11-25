import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner, InputGroup, FormControl, Form} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_MG} from '../../utils/queries'
import {GET_HGS, GET_MGS} from '../../utils/state/actions'
import MasterGradeList from '../../Components/MasterGradeList/MasterGradeList'
import Paginate from '../../Components/Pagination/Pagination'

const MasterGrade = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadMasterGrade, setLoadMasterGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_MG)
    let {getMG} = state
    const [AllMasterGrade, setAllMasterGrade] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_MGS, payload: data.getMG})
            if(getMG.length === 0) {
                setAllMasterGrade(data.getMG)
            } else {
                setAllMasterGrade(getMG)
            }
        }
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllMasterGrade.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    useEffect(() => {
        setTimeout(() => {
            setLoadMasterGrade(false)
        }, 1000)
    }, [loadMasterGrade])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getMG.length <= 1) {
            dispatch({type: GET_MGS, payload: data.getMG})
            setAllMasterGrade(state.getMG)
        } else {
            setAllMasterGrade(
                getMG.filter((masterGrades) => 
                masterGrades.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
            )
        }
    }

    if(loading) return <Spinner className="spinner" animation="grow" variant="dark" />

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
                            searchHandler(AllMasterGrade)
                        }}
                    />
                </InputGroup>
                {loadMasterGrade && <Spinner animation="border" role="status"/>}
                <Row>
                    {!loadMasterGrade && !loading && <MasterGradeList masterGrades={currentItems}/>}
                </Row> 
            </Container>
            <Paginate 
                itemsPerPage={itemsPerPage}
                totalItems={AllMasterGrade.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default MasterGrade
