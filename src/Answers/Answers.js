import React from 'react';
import "./Answer.scss";

const Answers = ({ options , checkCorrectAnswer }) => {

    return (
            <ul className="options">
                <li className="option">
                    <input 
                        type="radio"
                        className="radioCustomButton"
                        name="answer"
                        id={options}
                        value={options}
                        onChange={(e) => checkCorrectAnswer(e.target.value)}
                        />
                        <label className="radioCustomLabel" htmlFor={options}>
                            {options}
                        </label>
                </li>
            </ul>
    )
}


export default Answers
