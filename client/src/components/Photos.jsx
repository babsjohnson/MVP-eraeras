import React, { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem.jsx';
import {Photo} from "../assets/playlists.js";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Photos = () => {
  const [photos, setPhotos] = useState(Photo);

  return (
    <div>
          {photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo} />
      ))}
      <Link to="/"><h1>home</h1></Link>
    </div>
  )
}

export default Photos;