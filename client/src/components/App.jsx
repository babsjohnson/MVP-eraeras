import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Playlists  from "./Playlists.jsx";
import  Photos  from "./Photos.jsx";
import  Home  from "./Home.jsx";
import  Admin  from "./Admin.jsx";
import  Layout  from "./Layout.jsx";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;