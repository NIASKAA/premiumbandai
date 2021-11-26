import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner, InputGroup, FormControl} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_OTHERS} from '../../utils/queries'
import {GET_OTHERS} from '../../utils/state/actions'
import OtherList from '../../Components/OthersList/OthersList'
import Paginate from '../../Components/Pagination/Pagination'

const Others = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadingOther, setLoadingOther] = useState(true)
    const {loading, data} = useQuery(GET_ALL_OTHERS)
    let {getOthers} = state
    const [AllOther, setAllOther] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

    useEffect(() => {
        if(loading === false && data) {
        dispatch({type: GET_OTHERS, payload: data.getOthers})
            if(getOthers.length === 0) {
                setAllOther(data.getOthers)
            } else {
                setAllOther(getOthers)
            }
        }
        console.log(data)
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllOther.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setLoadingOther(false);
        }, 1000)
    }, [loadingOther]);

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getOthers.length <= 1) {
            dispatch({type: GET_OTHERS, payload: data.getOthers})
            setAllOther(state.getOthers)
        } else {
            setAllOther(
                getOthers.filter((others) => 
                    others.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase())
                )
            )
        }
    }

    if (loading) return <Spinner className="spinner" animation="grow" variant="dark" />;

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
                            searchHandler(AllOther)
                        }}
                    />
                </InputGroup>
                {loadingOther && <Spinner animation="border" role="status"/>}
                <Row>
                  {!loadingOther && !loading && <OtherList others={currentItems} />}
                </Row>
            </Container>
            <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={AllOther.length}
                paginate={paginate}
                currentPage={currentPage}
            />  
        </>
    )
}

export default Others
