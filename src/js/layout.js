import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Topnavbar } from "./components/common/navbar";
import { Home } from "./views/home.js";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Topnavbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route render={() => <h1 className="notfound">Not found!</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
