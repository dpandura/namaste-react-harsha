import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 id="heading">Namaste React using JSX</h1>;

const title = <h1 id="heading">Namaste React</h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <TitleComponent></TitleComponent>
    <h1 id="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
