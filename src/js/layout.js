import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Navbar } from "./components/common/Navbar.js";
import { Home } from "./views/home.js";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
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
