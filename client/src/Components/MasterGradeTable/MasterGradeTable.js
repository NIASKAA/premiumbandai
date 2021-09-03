import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_MASTERGRADE_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const MasterGradeTable = ({masterGrades}) => {
    const [deleteMasterGradeSave] = useMutation(DELETE_MASTERGRADE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteMasterGradeSave({
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
                            <Button onClick={() => deleteItem(masterGrade._id)} variant="danger"></Button>
                        </tr>
                        
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default MasterGradeTable
