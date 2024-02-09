import React from "react";
import { Provider } from "react-redux";
import AppRouter from "../router/appRouter";
import store from "./store";

const ProviderRedux = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default ProviderRedux;
