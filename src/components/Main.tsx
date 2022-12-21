import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from "react";
import Home from '../pages/Home';
import { StartUp } from '../pages/StartUp';
import BusinessOwnerPolicy from '../pages/BusinessOwnerPolicy';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import PersonalDetail from '../pages/UserDetail/PersonalDetail';
import UserDetail from '../pages/UserDetail';

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home />
        }
      ></Route>
      <Route
        path="/start-up"
        element={
          <StartUp />
        }
      ></Route>
      <Route
        path="/business-owner-policy"
        element={
          <BusinessOwnerPolicy />
        }
      ></Route>
      <Route
        path="/sign-in"
        element={
          <SignIn />
        }
      ></Route>
      <Route
        path="/sign-up"
        element={
          <SignUp />
        }
      ></Route>
      <Route
        path="/user-detail"
        element={
          <UserDetail />
        }
      ></Route>
    </Routes>

  )

}

export default Main;