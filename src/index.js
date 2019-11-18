import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/style.css";
import "./style/btn.css";
import "./style/icons.css";
import "./style/dropdown.css";
import "./style/welcome.css";
import "./style/font.css";
import "./style/chart.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
