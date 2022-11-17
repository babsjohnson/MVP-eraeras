import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
justify-content: center;
// padding: 20px 0px 20px 0px;
// margin: 30px 0px 30px 0px;
`

const Form = styled.div`
display: flex;
justify-content: center;
// padding: 20px 0px 20px 0px;
// margin: 30px 0px 30px 0px;
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
    .then(() => console.log("posted"))
    .catch((err) => console.log(err))
  }
  const submitPlaylist = (e) => {
    e.preventDefault();
    axios.post('/playlists', playlist)
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <div>
        <h1>Add Photo</h1>
        <form onSubmit={(e)=> submitPhoto(e)}>
        <label htmlFor="img_url">Image Url:</label>
        <input  type="text" id="img_url"
        required value={img_url} onChange={e=>setImg_url(e.target.value)}/>
        <label htmlFor="tag">Image Tag:</label>
        <input  type="text" id="tag" value={tag} onChange={e=>setTag(e.target.value)}/>
        <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <h1>Add Playlist</h1>
        {/* <form onSubmit={(e)=> submitPlaylist(e)}>
        <label htmlFor="URL">Spotify Url:</label>
        <input  type="text" id="url"
          required value={url} onChange={e=>setUrl(e.target.value)}/>
        <label htmlFor="name">Playlist Name:</label>
        <input  type="text" id="name" value={lastName} onChange={e=>setName(e.target.value)}/>
        <button type='submit'>Submit</button>
        </form> */}
      </div>
    </div>
  )
}

export default Admin;