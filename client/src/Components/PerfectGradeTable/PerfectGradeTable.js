import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_PERFECTGRADE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const PerfectGradeTable = ({perfectGrades}) => {
    const [deletePerfectGradeSave] = useMutation(DELETE_PERFECTGRADE_SAVE)

    const deleteItem = (id) => {
        try {
            deletePerfectGradeSave({
                variables: {
                    perfectGradeID: id
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
                    {
                    perfectGrades.map((perfectGrade) => (
                        <tr perfectGrade={perfectGrade} key={perfectGrade.id}>
                            <td>{perfectGrade.gunplaName}</td>
                            <td>{perfectGrade.series}</td>
                            <td>{perfectGrade.price}</td>
                            <td>{perfectGrade.releaseDate}</td>
                            <Button onClick={() => deleteItem(perfectGrade._id)} variant="danger"></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default PerfectGradeTable
