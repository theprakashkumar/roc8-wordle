import "./Board.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Row from "./Row";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";

const Board = () => {
    const { board, gameOver } = useContext(DataContext);
    return (
        <div className="board-container">
            <div className="board">
                {board.map((row, index) => (
                    <Row rowData={row} rowNumber={index} />
                ))}
            </div>
        </div>
    );
};

export default Board;
