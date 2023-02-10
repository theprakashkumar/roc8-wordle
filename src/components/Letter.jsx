import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "./Letter.css";
const Letter = ({ letter, letterPosition, rowNumber }) => {
    const {
        correctWord,
        currentAttempt: { row },
        setWrongGuess,
        rightGuess,
        setRightGuess,
        almostGuess,
        setAlmostGuess,
    } = useContext(DataContext);
    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const almost =
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    useEffect(() => {
        // put wrong guessed word into the wrongGuess
        if (letter !== "" && !correct && !almost) {
            setWrongGuess((previousWrongGuess) => [
                ...previousWrongGuess,
                letter,
            ]);
        }
        // put right guessed word into the rightGuess
        if (letter !== "" && correct) {
            // if letter is in almostGuess then remove is from there and the put letter into the rightGuess
            if (almostGuess.includes(letter)) {
                const newAlmostGuess = almostGuess.filter(
                    (guessAlphabet) => guessAlphabet !== letter
                );
                setAlmostGuess(newAlmostGuess);
            }
            // if letter is already in the rightGuess do nothing
            if (rightGuess.includes(letter)) return;

            setRightGuess((previousRightGuess) => [
                ...previousRightGuess,
                letter,
            ]);
        }
        // put almost guessed word into the almostGuess
        if (letter !== "" && almost) {
            if (rightGuess.includes(letter)) return;
            if (almostGuess.includes(letter)) return;
            setAlmostGuess((previousAlmostGuess) => [
                ...previousAlmostGuess,
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
