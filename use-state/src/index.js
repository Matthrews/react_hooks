import React from "react";
import ReactDOM from "react-dom";
import HookApp from "./HookApp";
import ClassApp from "./ClassApp";
// import Bpp from "./Bpp";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <ClassApp />
    <HookApp />
    {/* <Bpp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
