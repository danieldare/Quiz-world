import React from 'react';
import "./QuestionCount.scss";

const QuestionCount = ({ counter , total }) => {
    return (
        <div className="Question-Count">
            Question <span>{counter}</span> of {total}
        </div>
    )
}

export default QuestionCount
