import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const DeleteTaskModal = (props, index) => {
  const deleteTask = (index) => {
    return () =>
      props.setTasks(() =>
        props.tasks.filter((task, i) => {
          return i !== index;
        })
      );
  };
  return (
    <>
      {console.log("THERE", props.show)}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: props.show ? "inline-block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Are you sure?</h5>
              <button
                onClick={() => props.onClose()}
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
                onClick={() => props.onClose()}>
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

/**
 * Define the data-types for
 * your component's properties
 **/

DeleteTaskModal.propTypes = {
  onClose: PropTypes.func,
};

/**
 * Define the default values for
 * your component's properties
 **/
DeleteTaskModal.defaultProps = {
  show: false,
  onClose: null,
};
