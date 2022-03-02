import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import { DeleteTaskModal } from "../common/DeleteTaskModal";

export const Task = ({ props, value, index }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {console.log("HERES", () => props.onDelete())}
      {console.log("WHAT", index)}

      {value !== "" ? (
        <ul className=" list-group">
          <li className="list-group-item m-3 p-2" key={index}>
            <div class="row d-flex align-items-center">
              <div class="col-sm">
                <div> {value}</div>
              </div>
              <div class="col-sm d-flex align-items-center justify-content-end">
                <div
                  className="btn btn-danger"
                  onClick={() => setShowModal(true)}>
                  <FontAwesomeIcon icon={faTrashCan} size="md" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
      <DeleteTaskModal
        show={showModal}
        index={index}
        tasks={() => props.tasks}
        setTasks={() => props.setTasks}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

Task.propTypes = {
  onDelete: PropTypes.func,
};

Task.defaultProps = {
  onDelete: null,
};
