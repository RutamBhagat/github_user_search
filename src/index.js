import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.js";
import "./index.scss";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>  
);
