import React, { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem.jsx';
import {Photo} from "../assets/playlists.js";

const Photos = () => {
  const [photos, setPhotos] = useState(Photo);

  return (
    <div>
      <h2>Photos</h2>
          {photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo} />
      ))}
    </div>
  )
}

export default Photos;