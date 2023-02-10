import "./GameOver.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const GameOver = () => {
    const { correctWord, correctlyGuessed, playAgain } =
        useContext(DataContext);
    return (
        <div className="game-over">
            <h2 className="heading">Game Over!</h2>
            <div className="result">
                {correctlyGuessed
                    ? `Well done, ${correctWord} was the word!`
                    : `Oops, ${correctWord} was the word!`}
            </div>
            <button className="play-again-button" onClick={() => playAgain()}>
                Play Again!
            </button>
        </div>
    );
};

export default GameOver;
