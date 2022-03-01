import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ value, index }) => {
  return (
    <>
      {value !== "" ? (
        <ul className=" list-group">
          <li className="list-group-item m-3 p-2" key={index}>
            <div class="row d-flex align-items-center">
              <div class="col-sm">
                <div> {value}</div>
              </div>
              <div class="col-sm d-flex align-items-center justify-content-end">
                <div className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrashCan} size="md" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
