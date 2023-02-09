import "./Key.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Key = ({ keyValue, bigKey }) => {
    const {
        currentAttempt: { row },
        onEnter,
        onDelete,
        onLetter,
        wrongGuess,
        rightGuess,
        almostGuess,
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
    const isRightGuess = rightGuess.includes(keyValue);
    const isAlmostGuess = almostGuess.includes(keyValue);
    return (
        <div
            className={`key ${isWrongGuess && "disabled"} ${
                row > 0 &&
                (isRightGuess ? "right" : isAlmostGuess ? "almost" : "")
            }`}
            id={bigKey && "big-key"}
            onClick={() => clickHandler(keyValue)}
        >
            {keyValue}
        </div>
    );
};

export default Key;
