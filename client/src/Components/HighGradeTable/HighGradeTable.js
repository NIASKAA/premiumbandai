import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_HIGHGRADE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";  

const HighGradeTable = ({highGrades}) => {
    const [deleteHighGradeSave] = useMutation(DELETE_HIGHGRADE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteHighGradeSave({
                variables: {
                    highGradeID: id
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
                    {highGrades.map((highGrade) => (
                        <tr highGrade={highGrade} key={highGrade.id}>
                            <td>{highGrade.gunplaName}</td>
                            <td>{highGrade.series}</td>
                            <td>{highGrade.price}</td>
                            <td>{highGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(highGrade._id)} variant="danger"><BsFillTrashFill/></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default HighGradeTable
