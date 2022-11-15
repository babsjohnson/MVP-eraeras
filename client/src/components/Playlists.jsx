import React, { useState, useEffect } from 'react';
import PlaylistItem from "./PlaylistItem.jsx";

const Playlists = () => {
  const [playlists , SetPlaylists] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <div>
      {{playlists.map}}
      <PlaylistItem />
    </div>
  )
}

export default Playlists;