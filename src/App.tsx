import React from "react";
import { Pages } from "@/pages";
import store from '@/store/index';
import { Provider } from "react-redux";


import "./App.scss";

const App = () => {
  return (
    <Provider store={store} >
      <Pages />
    </Provider >
  )

};

export default App;
