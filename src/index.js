import React from "react";
import ReactDOM from "react-dom";
import AppShell from "./AppShell";
import { HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <HashRouter>
    <AppShell />
  </HashRouter>,
  document.getElementById("root")
);
