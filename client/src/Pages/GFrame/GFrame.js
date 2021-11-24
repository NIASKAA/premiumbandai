import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Spinner, Row, InputGroup, FormControl} from 'react-bootstrap'
import {useQuery} from '@apollo/client'
import {GET_ALL_GFRAME} from '../../utils/queries'
import {GET_GFRAME} from '../../utils/state/actions'
import GFrameList from '../../Components/GFrameList/GFrameList'
import Paginate from '../../Components/Pagination/Pagination'

const GFrame = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadingGFrame, setLoadingGFrame] = useState(true)
    const {loading, data} = useQuery(GET_ALL_GFRAME)
    let {getGFrame} = state
    const [AllGFrame, setAllGFrame] = useState(() => [])
    const [currentPage , setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_GFRAME, payload: data.getGFrame})
            if(getGFrame.length === 0) {
                setAllGFrame(data.getGFrame)
            } else {
                setAllGFrame(getGFrame)
            }
        }
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllGFrame.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setLoadingGFrame(false);
        }, 1000);
    })

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getGFrame.length <= 1) {
            dispatch({type: GET_GFRAME, payload: data.getGFrame})
            setAllGFrame(state.getGFrame)
        } else {
            setAllGFrame(
                getGFrame.filter((gFrame) => 
                gFrame.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
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
                        value={searchGunpla}
                        aria-describedby="searchbar"
                        onChange={(event) => {
                            setSearchGunpla(event.target.value);
                            searchHandler(AllGFrame);
                        }}
                        />
                </InputGroup>
                {loadingGFrame && <Spinner animation="bordered" role="status" />}
                <Row>
                    {!loadingGFrame && !loading && <GFrameList GFrames={currentItems} />}
                </Row>
            </Container>
            <Paginate 
                itemsPerPage={itemsPerPage}
                totalItems={AllGFrame.length}
                paginate={paginate}
                currentPage={currentPage}
                />
        </>
    )
}

export default GFrame
