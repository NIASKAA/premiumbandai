import React from 'react'
import RealGradeCard from './RealGradeCard/RealGradeCard'

const RealGradeList = ({realGrades}) => {
    return (
        <>
            {realGrades.map((realGrade) => (
                <RealGradeCard realGrade={realGrade} key={realGrade.id}/>
            ))}
        </>
    )
}

export default RealGradeList
