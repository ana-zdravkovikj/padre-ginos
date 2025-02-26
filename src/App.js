import React from "react";
import ReactDOM from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "pizza pizza",
    }),
    React.createElement(Pizza, {
      name: "The Mozzarella Pizza",
      description: "mozzarela pizza",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "pinnaple pizza",
    }),
    React.createElement(Pizza, {
      name: "The Napolitano Pizza",
      description: "napolitano pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
