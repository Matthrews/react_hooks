import React from "react";
import ReactDOM from "react-dom";
// import HookApp from "./HookApp";
// import ClassApp from "./ClassApp";
import HookBpp from "./HookBpp";
import ClassBpp from "./ClassBpp";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <ClassApp /> */}
    {/* <HookApp /> */}
    <ClassBpp />
    <HookBpp />
  </React.StrictMode>,
  document.getElementById("root")
);
