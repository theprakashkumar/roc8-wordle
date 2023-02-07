import { createContext, useState } from "react";

export const DataContext = createContext();

const defaultBoard = [
    ["A", "", "", "", "", ""],
    ["", "B", "", "", "", ""],
    ["", "", "C", "", "", ""],
    ["", "", "", "D", "", ""],
    ["", "", "", "", "E", ""],
    ["", "", "", "", "", "F"],
];

export const DataProvider = ({ children }) => {
    const [board, setBoard] = useState(defaultBoard);
    return (
        <DataContext.Provider value={{ board, setBoard }}>
            {children}
        </DataContext.Provider>
    );
};
