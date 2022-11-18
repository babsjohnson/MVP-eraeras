import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import home from '../assets/home.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H2 = styled.h2`
  color: whitesmoke;
  font-weight: bold;
`
const Button = styled.button`
  font-weight: bold;
  background: whitesmoke;
  border: none;
  color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 5px 10px 18px black;
  opacity: 80%
`
const Img = styled.img`
  opacity: 80%;
  margin: 30px 0 20px 0;
`

const Admin = () => {
  const [img_url , setImg_url] = useState('');
  const [tag, setTag] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const photo = {
    img_url,
    tag
  }
  const playlist = {
    url,
    name
  }

  const submitPhoto = (e) => {
    e.preventDefault();
    console.log("clicked")
    axios.post('/photos', photo)
  }

  const submitPlaylist = (e) => {
    e.preventDefault();
    axios.post('/playlists', playlist)
  }



  return (
    <div>
      <Wrapper>
        <H2>Add Photo</H2>

        <form onSubmit={(e)=> submitPhoto(e)}>
        <label htmlFor="img_url"><h5>Image Url:</h5></label>

        <input  type="text" id="img_url"
          required value={img_url} onChange={e=>setImg_url(e.target.value)}/>

        <label htmlFor="tag"><h5>Image Tag:</h5></label>
        <input  type="text" id="tag" value={tag} onChange={e=>setTag(e.target.value)}/>
        <div>
        <br></br>
        <Button type='submit'>SUBMIT</Button>
        </div>
        </form>

        <H2>Add Playlist</H2>

        <form onSubmit={(e)=> submitPlaylist(e)}>
        <label htmlFor="url"><h5>Spotify Url:</h5></label>
        <input  type="text" id="url"
          required value={url} onChange={e=>setUrl(e.target.value)}/>
        <label htmlFor="name"><h5>Playlist Name:</h5></label>
        <input  type="text" id="name" value={name} onChange={e=>setName(e.target.value)}/>
        <div>
          <br></br>
        <Button type='submit'>SUBMIT</Button>
        </div>
        </form>
        <Link to="/"><Img src={home} alt="home-button" width="50px" /></Link>
      </Wrapper>
    </div>
  )
}

export default Admin;