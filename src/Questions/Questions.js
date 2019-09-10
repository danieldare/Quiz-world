import React from 'react';
import "./Questions.scss";

const Questions = ({ question  }) => {
    return (
        <div className="Question">
                {question}
        </div>
    )
}

export default Questions;
