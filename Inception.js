//const heading = React.createElement("h1",{id:"abc","xyz":"def"},"This is the heading created through React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
const heading = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id:"Child1"},[
        React.createElement("h1",{},"Heading 1"),
        React.createElement("h2",{},"Heading 2")
    ]),
    React.createElement("div",{id : "Child2"},[
        React.createElement("h1",{},"Heading1"),
        React.createElement("h2",{},"Heading2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
