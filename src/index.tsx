import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";
import reportWebVitals from "./reportWebVitals";
import { reset } from "./style";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>로딩중입니다</div>}>
        <Global styles={reset} />
        <Popup />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("popup") || document.createElement("div")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
