import { useContext } from "react";
import "./App.css";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
import { DataContext } from "./context/DataContext";

function App() {
    const { gameOver } = useContext(DataContext);
    return (
        <div className="App">
            <Navbar />
            <Board />
            <div>{gameOver ? <GameOver /> : <Keyboard />}</div>
        </div>
    );
}

export default App;
