import "./Key.css";

const Key = ({ keyValue, bigKey }) => {
    return (
        <div className="key" id={bigKey && "big-key"}>
            {keyValue}
        </div>
    );
};

export default Key;
