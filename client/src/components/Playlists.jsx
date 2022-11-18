import React, { useState, useEffect } from 'react';
import PlaylistItem from "./PlaylistItem.jsx";
import home from '../assets/home.png'
import {links} from "../assets/playlists.js";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Playlists = () => {
  const [playlists, setPlaylists] = useState(links);

  const Img = styled.img`
    opacity: 80%;
    margin: 30px 0 20px 0;
`

  return (
    <div>
    {playlists.map((playlist,  i) => (
      <PlaylistItem key= {i} playlist={playlist} />
      ))}
      <Link to="/"><Img src={home} alt="home-button" width="50px" /></Link>
    </div>
  )
}

export default Playlists;