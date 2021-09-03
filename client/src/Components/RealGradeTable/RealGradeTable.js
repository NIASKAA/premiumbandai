import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_REALGRADE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const RealGradeTable = ({realGrades}) => {
    const [deleteRealGradeSave] = useMutation(DELETE_REALGRADE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteRealGradeSave({
                variables: {
                    realGradeID: id
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
                    {realGrades.map((realGrade) => (
                        <tr realGrade={realGrade} key={realGrade.id}>
                            <td>{realGrade.gunplaName}</td>
                            <td>{realGrade.series}</td>
                            <td>{realGrade.price}</td>
                            <td>{realGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(realGrade._id)} variant="danger"></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default RealGradeTable
