import "./Row.css";
import Letter from "./Letter";
const Row = ({ rowData, rowNumber }) => {
    return (
        <div className="row">
            {rowData.map((letter, index) => (
                <Letter
                    letter={letter}
                    letterPosition={index}
                    rowNumber={rowNumber}
                    key={index}
                />
            ))}
        </div>
    );
};

export default Row;
