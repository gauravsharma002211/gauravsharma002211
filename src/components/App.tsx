import React from 'react';
import Header from '../common/Layouts/Header';
import Footer from '../common/Layouts/Footer';
import Main from './Main';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomToast from '../common/CustomToast';
import { IReduxState } from '../utils/types';

function App() {
  const location = useLocation();
  const ToastState = useSelector((state: IReduxState) => state.Toast);
  console.log("location---->", location);
  // console.log('ToastState', ToastState);


  return (
    <div className="App">
      {/* <CustomToast
        show={ToastState.show}
        message={ToastState.message}
        severity={ToastState.severity}
      /> */}

      {!(location?.pathname?.includes("sign-in") || location?.pathname?.includes("sign-up") || location?.pathname?.includes("user-detail")) ? <><Header /><Main />
        <Footer /></> : <Main />}
    </div>
  );
}

export default App;
