import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Container, Spinner} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_CONVERGES} from '../../utils/queries'
import {GET_CONVERGES} from '../../utils/state/actions'
import ConvergeList from '../../Components/ConvergeList/ConvergeList'
import Paginate from '../../Components/Pagination/Pagination'
import './styles.css'

const Converges = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [loadingConverge, setLoadingConverge] = useState(true)
  const {loading, data} = useQuery(GET_ALL_CONVERGES)
  let {getConverges} = state
  const [AllConverge, setAllConverge] = useState(() => [])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(16)

  useEffect(() => {
    if(loading === false && data) {
      dispatch({type: GET_CONVERGES, payload: data.getConverges})
      if(getConverges.length === 0) {
        setAllConverge(data.getConverges)
      } else {
        setAllConverge(getConverges)
      }
    }
    console.log(data)
  }, [loading ,data])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = AllConverge.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(() => {
    setTimeout(() => {
      setLoadingConverge(false);
    }, 1000);
  });

  if (loading) return <Spinner className="spinner" animation="grow" variant="dark" />;

    return (
        <>
          <Container>
              {loadingConverge && <Spinner animation="border" role="status"/>}
                <div className="row">
                  {!loadingConverge && !loading && <ConvergeList converges={currentItems} />}
                </div>
          </Container>
          <Paginate
            itemsPerPage={itemsPerPage}
            totalItems={AllConverge.length}
            paginate={paginate}
            currentPage={currentPage}
          />  

         
        </>
    )
}

export default Converges
