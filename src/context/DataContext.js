import { createContext, useState } from "react";

export const DataContext = createContext();

const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const DataProvider = ({ children }) => {
    const [board, setBoard] = useState(defaultBoard);
    const [currentAttempt, setCurrentAttempt] = useState({
        letter: 0,
        row: 0,
    });

    const { letter: currentLetter, row: currentRow } = currentAttempt;

    const onEnter = () => {
        if (currentLetter !== 5) return;
        setCurrentAttempt({ letter: 0, row: currentRow + 1 });
    };

    const onDelete = () => {
        if (currentLetter === 0) return;
        let newBoard = [...board];
        newBoard[currentRow][currentLetter - 1] = "";
        setBoard(newBoard);
        setCurrentAttempt({ ...currentAttempt, letter: currentLetter - 1 });
    };

    const onLetter = (key) => {
        if (currentLetter > 4) return;
        let newBoard = [...board];
        newBoard[currentRow][currentLetter] = key;
        setBoard(newBoard);
        setCurrentAttempt({ ...currentAttempt, letter: currentLetter + 1 });
    };

    return (
        <DataContext.Provider
            value={{
                board,
                setBoard,
                currentAttempt,
                setCurrentAttempt,
                onEnter,
                onDelete,
                onLetter,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
