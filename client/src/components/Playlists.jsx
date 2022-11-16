import React, { useState, useEffect } from 'react';
import PlaylistItem from "./PlaylistItem.jsx";
import {links} from "../assets/playlists.js";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(links);

  useEffect(() => {

  }, [])

  return (
    <div>
      <h2>Playlists</h2>
    {playlists.map((playlist,  i) => (
      <PlaylistItem key= {i} playlist={playlist} />
      ))}
    </div>
  )
}

export default Playlists;