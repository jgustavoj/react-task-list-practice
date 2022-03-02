import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DeleteTaskModal } from "../common/DeleteTaskModal.js";
import { Task } from "../task/Task.js";
import "./InputList.scss";

export const InputList = (props) => {
  const [input, setInput] = useState({});
  const [tasks, setTasks] = useState([{ title: "", complete: false }]);

  const handleChange = (e) => {
    setInput({ title: e.target.value, complete: false });
  };

  const handleClick = () => {
    setTasks([...tasks, input]);
    setInput({ title: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
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
      {/* Task list */}
      {tasks.map((value, index) => {
        return (
          <Task
            key={index}
            value={value.title}
            index={index}
            tasks={() => tasks}
            setTasks={() => setTasks}
          />
        );
      })}
      <hr />
      <div>
        <b>Pending Task to complete</b>
        <div className="ml-5">{tasks.length - 1}</div>
      </div>
    </>
  );
};
// deleteTask={deleteTask}
