import "./Board.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Row from "./Row";

const Board = () => {
    const { board } = useContext(DataContext);
    console.log(board);
    return (
        <div className="board">
            {board.map((row, index) => (
                <Row rowData={row} rowNumber={index + 1} />
            ))}
        </div>
    );
};

export default Board;
