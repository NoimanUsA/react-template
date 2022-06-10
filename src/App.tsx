import React from "react";
import { Provider } from "react-redux";
import { Pages } from "@/pages";
import store from '@/store/index';


import "./App.scss";

const App = () => (
  <Provider store={store} >
    <Pages />
  </Provider >
);

export default App;
