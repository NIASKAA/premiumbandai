import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Spinner} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_ENSEMBLE} from '../../utils/queries'
import {GET_ENSEMBLE} from '../../utils/state/actions'
import Paginate from '../../Components/Pagination/Pagination'
import './styles.css'

const Ensemble = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadingEnsemble, setLoadingEnsemble] = useState(true)
    const {loading, data} = useQuery(GET_ALL_ENSEMBLE)
    let {getEnsemble} = state
    const [AllEnsemble, setAllEnsemble] = useState(() => [])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(16)
    
    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_ENSEMBLE, payload: data.getEnsemble})
            if(getEnsemble.length === 0) {
                setAllEnsemble(data.getEnsemble)
            } else {
                setAllEnsemble(getEnsemble)
            }
        }
        console.log(data)
    }, [loading, data])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = AllEnsemble.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setTimeout(() => {
            setLoadingEnsemble(false);
        }, 1000);
    })

    return (
        <>
            <Container>

            </Container>
            <Paginate
                itemsPerPage={itemsPerPage}
                totalItems={AllEnsemble.length}
                paginate={paginate}
                currentPage={currentPage}
                />
        </>
    )
}

export default Ensemble
