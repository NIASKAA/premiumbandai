import React from 'react'
import { Pagination } from 'react-bootstrap'
import './styles.css'

const Paginate = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = []
    for (let number = 1; number <= Math.ceil(totalItems / itemsPerPage); number++) {
        pageNumbers.push(number)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => paginate(number)} className="page-item">
                       {number}
                    </Pagination.Item>
                ))}
            </ul>
        </nav>
    )
}

export default Paginate
