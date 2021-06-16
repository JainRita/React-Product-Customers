import React from 'react';
import ReactDOM from 'react-dom';

/*import jquery, pooper and bootstrap js files */
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";

/*import bootstrap and index.css files */
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

/*import NavBarComponent */
import App from "./App";

/*Render NavBarComponent to the root node <div id="root"></div> in index.html */
ReactDOM.render(<App />, document.querySelector("#root"));


