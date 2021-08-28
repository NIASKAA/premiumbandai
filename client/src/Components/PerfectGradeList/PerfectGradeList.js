import React from 'react'
import PerfectGradeCard from './PerfectGradeCard/PerfectGradeCard'

const PerfectGradeList = ({perfectGrades}) => {
    return (
        <>
            {perfectGrades.map((perfectGrade) => (
                <PerfectGradeCard perfectGrade={perfectGrade} key={perfectGrade.id}/>
            ))}
        </>
    )
}

export default PerfectGradeList
