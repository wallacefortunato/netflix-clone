import React from "react";
import "./Arrow.css";

const Arrow = ({ direction, onClick }) => {
    return (
        <div className={`arrow arrow--${direction}`} onClick={onClick}>
            {direction === "left" ? "<" : ">"}
        </div>
    );
};

export default Arrow;