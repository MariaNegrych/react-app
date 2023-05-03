import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import About from "../about/About";
import Header from "../header/Header";
import { NotFound } from "../not-found/NotFound";
import Home from "../home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
