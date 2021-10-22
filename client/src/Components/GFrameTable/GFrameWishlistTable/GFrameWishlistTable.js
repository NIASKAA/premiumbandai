import React from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_GFRAME_WISHLIST} from '../../../utils/mutations'
import {Table, Button} from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs';

const GFrameWishlistTable = ({GFrames}) => {
    const [deleteGFrameWishlist] = useMutation(DELETE_GFRAME_WISHLIST)

    const deleteItem = (id) => {
        try {
               deleteGFrameWishlist({
                   variables: {
                       GFrameID: id
                   }
               })
        } catch (error) {
            console.log(error)
        }
        window.location.reload()
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
                    {GFrames.map((GFrame) => (
                        <tr GFrame={GFrame} key={GFrame.id}>
                            <td>{GFrame.gunplaName}</td>
                            <td>{GFrame.series}</td>
                            <td>{GFrame.price}</td>
                            <td>{GFrame.releaseDate}</td>
                            <Button onClick={() => deleteItem(GFrame._id)} variant="danger"><BsFillTrashFill/></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default GFrameWishlistTable
