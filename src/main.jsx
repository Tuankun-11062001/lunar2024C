import React from "react";
import ReactDOM from "react-dom/client";
import ProviderRedux from "./common/store/provider";
import "./common/sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderRedux />
  </React.StrictMode>
);
