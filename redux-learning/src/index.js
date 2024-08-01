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
  // @desc: 이 'Provider 컴포넌트'는 React 컴포넌트 트리의 '최상위'에 위치하며, *store 속성으로 전달된 Redux 스토어를 하위 모든 컴포넌트가 접근
  <Provider store={store}>
    <App /> 
  </Provider>
);



