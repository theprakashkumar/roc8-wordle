import "./Keyboard.css";
import Key from "./Key";
const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {keys1.map((key) => (
                    <Key keyValue={key} />
                ))}
            </div>
            <div className="keyboard-row">
                {keys2.map((key) => (
                    <Key keyValue={key} />
                ))}
            </div>
            <div className="keyboard-row">
                <Key keyValue={"Enter"} bigKey={true} />
                {keys3.map((key) => (
                    <Key keyValue={key} />
                ))}
                <Key keyValue={"Delete"} bigKey={true} />
            </div>
        </div>
    );
};

export default Keyboard;
