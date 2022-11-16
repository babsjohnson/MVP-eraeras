import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/photos">photography</Link>
        </li>
        <li>
          <Link to="/playlists">playlists</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;