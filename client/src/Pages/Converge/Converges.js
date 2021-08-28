import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Container, Spinner} from "react-bootstrap"
import {useQuery} from "@apollo/client"
import {GET_ALL_CONVERGES} from '../../utils/queries'
import {GET_CONVERGES} from '../../utils/state/actions'
import ConvergeList from '../../Components/ConvergeList/ConvergeList'

const Converges = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [loadingConverge, setLoadingConverge] = useState(true)
  const {loading, data} = useQuery(GET_ALL_CONVERGES)
  let {getConverges} = state
  const [AllConverge, setAllConverge] = useState(() => [])

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
                <Row>
                  {!loadingConverge && !loading && <ConvergeList converges={AllConverge} />}
                </Row>
          </Container>
        </>
    )
}

export default Converges
