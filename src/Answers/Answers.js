import React from 'react';
import "./Answer.scss";

const Answers = ({ options , getUserAnswer}) => {
    return (
                <li className="option">
                    <input 
                        type="radio"
                        className="radioCustomButton"
                        name="answer"
                        id={options}
                        value={options}
                        onChange={(e) => getUserAnswer(e.target.value, e.target.checked)}
                        />
                        <label className="radioCustomLabel" htmlFor={options}>
                            {options}
                        </label>
                </li>
    );
}


export default Answers
