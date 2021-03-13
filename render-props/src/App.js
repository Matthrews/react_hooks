import React from "react";
import ClickCounterOne from "./ClickCounterOne";
import HoverCounterOne from "./HoverCounterOne";
import User from "./User";

function App() {
  return (
    <div className="App">
      <ClickCounterOne />
      <HoverCounterOne />
      <User name="frank"/>
    </div>
  );
}

export default App;
