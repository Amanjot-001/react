import React from "react"
import ReactDOM from "react-dom"

const heading = React.createElement(
    'h1',
    {id: 'heading', xyz: 'abc'},
    'hello'
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)