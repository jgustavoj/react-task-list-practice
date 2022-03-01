import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../task/task.js";
import "./App.scss";

export const App = () => {
  const [input, setInput] = useState({});
  const [task, setTask] = useState([{ title: "", complete: false }]);

  // console.log("input", input);
  // console.log("SetInput", setInput);

  const handleChange = (e) => {
    setInput({ title: e.target.value, complete: false });
  };

  const handleClick = () => {
    setTask([...task, input]);
    setInput({ title: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      {/* input */}
      <div className="container">
        <div className="row">
          <div class="col-3"></div>
          <div class="col-6">
            <div className="input-group mb-3" style={{ marginTop: "6rem" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Input your task"
                onChange={handleChange}
                value={input.title}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
                onClick={handleClick}>
                <FontAwesomeIcon icon={faPlus} size="2x" />
              </button>
            </div>
            <hr />
            {task.map((value, index) => {
              return <Task key={index} value={value.title} index={index} />;
            })}
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </>
  );
};
