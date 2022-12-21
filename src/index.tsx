
import './index.css';
import App from './components/App';
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';
import { store, persistor } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();                                                                                                                                                        