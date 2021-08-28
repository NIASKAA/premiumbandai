import React from 'react'
import HighGradeCard from './HighGradeCard/HighGradeCard'

const HighGradeList = ({highGrades}) => {
    return (
        <>
            {highGrades.map((highGrade) => (
                <HighGradeCard highGrade={highGrade} key={highGrade.id}/>
        ))}
        </>
    )
}

export default HighGradeList
