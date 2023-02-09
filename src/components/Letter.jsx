import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "./Letter.css";
const Letter = ({ letter, letterPosition, rowNumber }) => {
    const {
        correctWord,
        currentAttempt: { row },
        wrongGuess,
        setWrongGuess,
    } = useContext(DataContext);
    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const almost =
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setWrongGuess((previousWrongGuess) => [
                ...previousWrongGuess,
                letter,
            ]);
        }
    }, [row]);
    return (
        <div
            className={`letter ${
                rowNumber < row &&
                (correct ? "correct" : almost ? "almost" : "wrong")
            }`}
        >
            {letter}
        </div>
    );
};

export default Letter;
