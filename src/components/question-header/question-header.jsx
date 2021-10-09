import React from 'react'

import './question-header.css'

const QuestionHeader = ({Title,Subtitle}) => (
    <>
    <div>
        <p className="Question Title">{Title}</p>
        <p className="Question Subtitle">{Subtitle}</p>
    </div>
    </>
)


export default QuestionHeader