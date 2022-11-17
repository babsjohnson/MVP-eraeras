import React, { useState, useEffect } from 'react';
import {Outlet} from "react-router-dom";
import Navbar from '../NavBar.jsx';

const Layout = () => {

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  )
}

export default Layout;