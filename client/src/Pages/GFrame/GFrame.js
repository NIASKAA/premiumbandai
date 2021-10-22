import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Spinner} from 'react-bootstrap'
import {useQuery} from '@apollo/client'
import {GET_ALL_GFRAME} from '../../utils/queries'
import {GET_GFRAME} from '../../utils/state/actions'
import GFrameList from '../../Components/GFrameList/GFrameList'
import Paginate from '../../Components/Pagination/Pagination'
import './Styles.css'

const GFrame = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
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

    if (loading) return <Spinner className="spinner" animation="grow" variant="dark" />;

    return (
        <>
            <Container>
                {loadingGFrame && <Spinner animation="bordered" role="status" />}
                <div>
                    {!loadingGFrame && !loading && <GFrameList GFrames={currentItems} />}
                </div>
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
