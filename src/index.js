import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/style.css";
import "./style/btn.css";
import "./style/icons.css";
import "./style/dropdown.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
