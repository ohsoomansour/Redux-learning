import React from 'react';
import App from './components/App';
import {createRoot} from "react-dom/client";
import {ReactDOM} from "react-dom";
import {Provider} from "react-redux";
import store from './routes/store';
/*
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
*/
/* #React ver.18*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
);



