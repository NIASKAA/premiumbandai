import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Spinner, Row, InputGroup, FormControl} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_ENSEMBLE} from '../../utils/queries'
import {GET_ENSEMBLE} from '../../utils/state/actions'
import EnsembleList from '../../Components/EnsembleList/EnsembleList'
import Paginate from '../../Components/Pagination/Pagination'

const Ensemble = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
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

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getEnsemble.length <=1) {
            dispatch({type: GET_ENSEMBLE, payload: data.getEnsemble})
            setAllEnsemble(state.getEnsemble)
          } else {
            setAllEnsemble(
              getEnsemble.filter((ensemble) => 
                ensemble.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase())
              )
            )
          }
    }

    if (loading) return <Spinner className="spinner" animation="grow" variant="dark" />;

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
                            setSearchGunpla(event.target.value);
                            searchHandler(searchGunpla);
                        }}
                    />
                </InputGroup>
                {loadingEnsemble && <Spinner animation="border" role="status" />}
                <Row>
                    {!loadingEnsemble && !loading && <EnsembleList ensembles={currentItems} />}
                </Row>
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
