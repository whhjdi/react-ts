import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();