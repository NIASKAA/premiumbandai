import React from 'react'
import {useMutation} from "@apollo/client"
import {DELETE_OTHER_SAVE} from '../../utils/mutations'
import {Table, Button} from 'react-bootstrap'

const OtherTable = ({others}) => {
    const [deleteOtherSave] = useMutation(DELETE_OTHER_SAVE)

    const deleteItem = (id) => {
        try {
            deleteOtherSave({
                variables: {
                    otherID: id
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
                    {others.map((other) => (
                        <tr other={other} key={other.id}>
                            <td>{other.gunplaName}</td>
                            <td>{other.series}</td>
                            <td>{other.price}</td>
                            <td>{other.releaseDate}</td>
                            <Button onClick={() => deleteItem(other._id)} variant="danger"></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default OtherTable
