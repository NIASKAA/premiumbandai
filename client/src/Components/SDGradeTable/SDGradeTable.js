import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_SDGRADE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const SDGradeTable = ({sdGrades}) => {
    const [deleteSDGradeSave] = useMutation(DELETE_SDGRADE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteSDGradeSave({
                variables: {
                    sdGradeID: id
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
                    {sdGrades.map((SDGrade) => (
                        <tr SDGrade={SDGrade} key={SDGrade.id}>
                            <td>{SDGrade.gunplaName}</td>
                            <td>{SDGrade.series}</td>
                            <td>{SDGrade.price}</td>
                            <td>{SDGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(SDGrade._id)} variant="danger"></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default SDGradeTable
