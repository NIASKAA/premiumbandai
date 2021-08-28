import React from 'react'
import MasterGradeCard from './MasterGradeCard/MasterGradeCard'

const MasterGradeList = ({masterGrades}) => {
    return (
        <>
           {masterGrades.map((masterGrade) => (
               <MasterGradeCard masterGrade={masterGrade} key={masterGrade.id}/>
           ))}
        </>
    )
}

export default MasterGradeList
