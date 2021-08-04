import React from "react";
import ReactDOM from "react-dom";

// import all components here
import App from "./App";

// import global style here
import "./styles/global.css";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
