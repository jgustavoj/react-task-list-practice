import React, { useState } from "react";
import { DeleteTaskModal } from "../components/common/DeleteTaskModal.js";
import { InputList } from "../components/inputList/InputList.js";

export const Home = () => {
  return (
    <>
      {/* input */}
      <div className="container">
        <div className="row">
          <div class="col-3"></div>
          <div class="col-6">
            <InputList />
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </>
  );
};
