import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoItem from './PhotoItem.jsx';
import {Photo} from "../assets/playlists.js";
import home from '../assets/home.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  opacity: 80%;
  margin: 0 0 20px 0;
`

const Photos = () => {
  const [photos, setPhotos] = useState(Photo);
  console.log(photos)
  // const getPhotos = () => {
  //   axios.get('/photos')
  //   .then ((data) => console.log("wtf", data))
  //   .catch((err) => console.log(err))
  // }

  // useEffect(() => {
  // }, [])

  return (
    <div>
          {photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo} />
      ))}
      <Link to="/"><Img src={home} alt="home-button" width="50px" /></Link>
    </div>
  )
}

export default Photos;