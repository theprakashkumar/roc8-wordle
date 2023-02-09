import "./Keyboard.css";
import Key from "./Key";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
const Keyboard = () => {
    const { onEnter, onDelete, onLetter, wrongGuess } = useContext(DataContext);
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = (event) => {
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            let letterCode = event.keyCode;
            if (
                // key code for alphabet that are allowed
                (letterCode > 64 && letterCode < 91) ||
                (letterCode > 96 && letterCode < 123) ||
                letterCode === 8
            ) {
                onLetter(event.key.toUpperCase());
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => document.removeEventListener("keydown", handleKeyboard);
    }, [handleKeyboard]);

    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {keys1.map((key) => (
                    <Key keyValue={key} key={key} />
                ))}
            </div>
            <div className="keyboard-row">
                {keys2.map((key) => (
                    <Key keyValue={key} key={key} />
                ))}
            </div>
            <div className="keyboard-row">
                <Key keyValue={"Enter"} bigKey={true} />
                {keys3.map((key) => (
                    <Key keyValue={key} key={key} />
                ))}
                <Key keyValue={"Delete"} bigKey={true} />
            </div>
        </div>
    );
};

export default Keyboard;
