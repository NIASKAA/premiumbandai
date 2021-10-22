import React from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_ENSEMBLE_WISHLIST} from '../../../utils/mutations'
import {BsFillTrashFill} from 'react-icons/bs';

const EnsembleWishlistTable = ({ensembles}) => {
    const [deleteEnsembleWishlist] = useMutation(DELETE_ENSEMBLE_WISHLIST)

    const deleteItem = (id) => {
        try {
            deleteEnsembleWishlist({
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
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Series</th>
                        <th>Price</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
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

export default EnsembleWishlistTable
