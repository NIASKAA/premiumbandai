import React from 'react'
import SDGradeCard from './SDGradeCard/SDGradeCard'

const SDGradeList = ({sdGrades}) => {
    return (
        <>
            {sdGrades.map((sdGrade) => (
                <SDGradeCard sdGrade={sdGrade} key={sdGrade.id}/>
            ))}
        </>
    )
}

export default SDGradeList
