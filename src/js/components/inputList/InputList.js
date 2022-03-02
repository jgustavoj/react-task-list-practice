import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListSquares, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { DeleteTaskModal } from "../common/DeleteTaskModal.js";
// import { Task } from "../task/Task.js";
import "./InputList.scss";

export const InputList = (props) => {
  const [input, setInput] = useState({});
  const [tasks, setTasks] = useState([{ title: "", complete: false }]);
  const [showModal, setShowModal] = useState(false);

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

  const deleteTask = (index) => {
    return setTasks(() =>
      tasks.filter((task, i) => {
        return i !== index;
      })
    );
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
        return value.title !== "" ? (
          <ul className=" list-group">
            <li className="list-group-item m-3 p-2" key={index}>
              <div class="row d-flex align-items-center">
                <div class="col-sm">
                  <div> {value.title}</div>
                </div>
                <div class="col-sm d-flex align-items-center justify-content-end">
                  <div
                    className="btn btn-danger"
                    onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon={faTrashCan} size="md" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          ""
        );
      })}
      <hr />
      <div>
        <b>Pending Task to complete</b>
        <div className="ml-5">{tasks.length - 1}</div>
      </div>

      {/* Modal */}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "inline-block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Are you sure?</h5>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Warning: unknown consequences after this point... Kidding!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(false)}>
                Oh no!
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => deleteTask()}>
                Do it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
