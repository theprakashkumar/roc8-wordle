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
    } = useContext(DataContext);

    // const { letter: currentLetter, row: currentRow } = currentAttempt;

    const clickHandler = (key) => {
        if (key === "Enter") {
            onEnter();
        } else if (key === "Delete") {
            onDelete();
        } else {
            onLetter(key);
        }
    };
    return (
        <div
            className="key"
            id={bigKey && "big-key"}
            onClick={() => clickHandler(keyValue)}
        >
            {keyValue}
        </div>
    );
};

export default Key;
