import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";
import Options from "./Options";
import reportWebVitals from "./reportWebVitals";
import { reset } from "./style";
import { Global } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>로딩중입니다</div>}>
      <Global styles={reset} />
      <Popup />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("popup") || document.createElement("div")
);

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Options />
  </React.StrictMode>,
  document.getElementById("options") || document.createElement("div")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
