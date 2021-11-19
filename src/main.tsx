import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux';
import { store } from './store/index';

import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
