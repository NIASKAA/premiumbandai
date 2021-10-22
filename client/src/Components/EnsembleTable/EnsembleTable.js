import React from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_ENSEMBLE_SAVE} from '../../utils/mutations'
import {BsFillTrashFill} from "react-icons/bs";  
import {Table, Button} from 'react-bootstrap'

const EnsembleTable = ({ensembles}) => {
    const [deleteEnsembleSave] = useMutation(DELETE_ENSEMBLE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteEnsembleSave({
                variables: {
                    ensembleID: id
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
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Series</th>
                        <th>Price</th>
                        <th>Release Date</th>
                    </tr>
                </thread>
                <tbody>
                    {ensembles.map((ensemble) => (
                        <tr ensemble={ensemble} key={ensemble.id}>
                        <td>{ensemble.gunplaName}</td>
                        <td>{ensemble.series}</td>
                        <td>{ensemble.price}</td>
                        <td>{ensemble.releaseDate}</td>
                        <Button onClick={() => deleteItem(ensemble._id)} variant="danger"><BsFillTrashFill/></Button>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default EnsembleTable
