import React, { useState, useEffect } from 'react';
import PlaylistItem from "./PlaylistItem.jsx";
import {links} from "../assets/playlists.js";
import { Link } from 'react-router-dom';

const Playlists = () => {
  const [playlists, setPlaylists] = useState(links);

  useEffect(() => {

  }, [])

  return (
    <div>
    {playlists.map((playlist,  i) => (
      <PlaylistItem key= {i} playlist={playlist} />
      ))}
      <Link to="/"><h1>home</h1></Link>
    </div>
  )
}

export default Playlists;