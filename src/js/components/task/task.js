import React from "react";

export const Task = ({ value, index }) => {
  return (
    <>
      {console.log("VAL", value)}
      {value !== "" ? (
        <ul className=" list-group">
          <li className="list-group-item m-3 p-2" key={index}>
            {value}
            <span className="float-right">X</span>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
