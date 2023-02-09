import "./Key.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Key = ({ keyValue, bigKey }) => {
    const {
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        onEnter,
        onDelete,
        onLetter,
        wrongGuess,
    } = useContext(DataContext);

    const clickHandler = (key) => {
        if (key === "Enter") {
            onEnter();
        } else if (key === "Delete") {
            onDelete();
        } else {
            onLetter(key);
        }
    };

    const isWrongGuess = wrongGuess.includes(keyValue);
    return (
        <div
            className={`key ${isWrongGuess && "disabled"}`}
            id={bigKey && "big-key"}
            onClick={() => clickHandler(keyValue)}
        >
            {keyValue}
        </div>
    );
};

export default Key;
