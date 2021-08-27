import React, {useState, useEffect} from 'react'
import {Col, Row, Container, Spinner} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import {GET_ALL_CONVERGES} from '../../utils/queries'
import ConvergeList from '../../Components/ConvergeList/ConvergeList'

const Converges = ({converges}) => {
    const { loading, data } = useQuery(GET_ALL_CONVERGES);
    if (loading) return <Spinner className="bidSpinner" animation="grow" variant="dark" />;
    return (
        <>
          <Container>
              
          </Container>
        </>
    )
}

export default Converges
