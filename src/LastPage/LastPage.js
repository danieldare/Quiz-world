import React from 'react';
import "./LastPage.scss";
import Won from "../source.gif";
import Congrats from "../congrats.gif"
import Angry from "../angry.png"

const LastPage = ({correctCount, questionLength, pastMark, resetGame}) => {
    return (
        <div className="LastPage">
           {correctCount/questionLength * 100 >= pastMark ?  
           <>
            <img src={Congrats} alt="congrats" className="congrats"/>
            <img src={Won} alt="won"  className="won-img"/>
            <div className="score-text">
                <p>Your Score: </p>
             <p className="score">{correctCount}/{questionLength}</p>
                <p className="text">You scored above the cut off mark!.</p>
             </div>
             </> : 
             <div className="Loser">
                 <div className="loser-text">
                    <img src={Angry} alt="angry"  className="angry"/>
                    <button onClick={resetGame} className="try-again">Try again</button>
                </div>
                <div className="loser-score">
                    <p className="score">{correctCount}/{questionLength}</p>
                    <p className="text">You performed woefullly idiot!.</p>
                 </div>
             </div>
           }
        </div>
    )
}

export default LastPage
