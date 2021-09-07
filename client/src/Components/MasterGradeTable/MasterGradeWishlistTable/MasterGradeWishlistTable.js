import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_MASTERGRADE_WISHLIST} from '../../../utils/mutations'
import {Table, Button} from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";  

const MasterGradeWishlistTable = ({masterGrades}) => {
    const [deleteMasterGradeWishlist] = useMutation(DELETE_MASTERGRADE_WISHLIST)

    const deleteItem = (id) => {
        try {
            deleteMasterGradeWishlist({
                variables: {
                    masterGradeID: id
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
                    {masterGrades.map((masterGrade) => (
                        <tr masterGrade={masterGrade} key={masterGrade.id}>
                            <td>{masterGrade.gunplaName}</td>
                            <td>{masterGrade.series}</td>
                            <td>{masterGrade.price}</td>
                            <td>{masterGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(masterGrade._id)} variant="danger"><BsFillTrashFill/></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default MasterGradeWishlistTable
