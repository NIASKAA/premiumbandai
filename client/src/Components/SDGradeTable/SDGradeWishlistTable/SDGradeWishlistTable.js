import React from 'react'
import {useMutation} from "@apollo/client"
import { DELETE_SDGRADE_WISHLIST } from '../../../utils/mutations'
import {Table, Button} from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";  

const SDGradeWishlistTable = ({SDGrades}) => {
    const [deleteSDGradeWishlist] = useMutation(DELETE_SDGRADE_WISHLIST)

    const deleteItem = (id) => {
        try {
            deleteSDGradeWishlist({
                variables: {
                    SDGradeID: id
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
                    {SDGrades.map((SDGrade) => (
                        <tr SDGrade={SDGrade} key={SDGrade.id}>
                            <td>{SDGrade.gunplaName}</td>
                            <td>{SDGrade.series}</td>
                            <td>{SDGrade.price}</td>
                            <td>{SDGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(SDGrade._id)} variant="danger"><BsFillTrashFill/></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default SDGradeWishlistTable
