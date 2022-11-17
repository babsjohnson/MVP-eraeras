import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoItem from './PhotoItem.jsx';
import {Photo} from "../assets/playlists.js";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    axios.get('/photos')
    .then ((res) => setPhotos(res))
  }

  return (
    <div>
          {photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo.img_link} />
      ))}
      <Link to="/"><h1>home</h1></Link>
    </div>
  )
}

export default Photos;