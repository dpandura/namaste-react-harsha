const heading1 = React.createElement("h1", { id: "heading"}, "Hello World from H1!");
const heading2 = React.createElement("h2", { id: "heading"}, "Hello World from H2!");
const child1 = React. createElement("div", {id: "child"},  [heading1, heading2]);
const child2 = React. createElement("div", {id: "child"},  [heading1, heading2])
const parent = React.createElement("div", {id: "parent"}, [child1, child2])

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 