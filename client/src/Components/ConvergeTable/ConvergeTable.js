import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_CONVERGE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const ConvergeTable = ({converges}) => {
    const [deleteConvergeSave] = useMutation(DELETE_CONVERGE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteConvergeSave({
                variables: {
                    convergeID: id
                }
            })
        } catch (error) {
            console.log(error)
        }
        window.location.reload();   
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Series</th>
                        <th>Price</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {converges.map((converge) => (
                        <tr converge={converge} key={converge.id}>
                            <td>{converge.gunplaName}</td>
                            <td>{converge.series}</td>
                            <td>{converge.price}</td>
                            <td>{converge.releaseDate}</td>
                            <Button onClick={() => deleteItem(converge._id)} variant="danger"></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ConvergeTable
