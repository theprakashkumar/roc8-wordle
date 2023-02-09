import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const GameOver = () => {
    const { correctlyGuessed } = useContext(DataContext);
    return (
        <div>
            Game Over{" "}
            {correctlyGuessed ? "guess it right!" : "better try next time!"}
        </div>
    );
};

export default GameOver;
