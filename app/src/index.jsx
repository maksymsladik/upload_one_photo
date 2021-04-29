import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import mainReducer from "./system/mainReducer";
import App from "./components/App";
import "./index.scss";

const store = createStore(mainReducer, composeWithDevTools());

if (document.getElementById("root")) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

if (!document.getElementById("root")) {
  ReactDOM.render(<h1>ERROR</h1>, document.querySelector("body"));
}
