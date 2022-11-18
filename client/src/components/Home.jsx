import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mail from '../assets/MAIL.png';
import ig from '../assets/ig.png';

const OuterDiv = styled.div`
position: 'absolute', left: '50%', top: '50%',
transform: 'translate(-50%, -50%)
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  // padding: 20px 0px 20px 0px;
  // margin: 30px 0px 30px 0px;
`
const H = styled.h2`
  color: black;
  text-decoration: none;
`
const Img = styled.img`
  opacity: 80%;
  padding: 20px;
  margin: 0 10px 20px 10px;
`

const Home = () => {

  return (
    <OuterDiv>
      <NavDiv>
        <h1>ERASMO VIERA</h1>
      </NavDiv>
       <NavDiv>
        <Link to="/photos"><H>photography</H></Link>
      </NavDiv>
      <NavDiv>
        <Link to="/playlists"><H>playlists</H></Link>
      </NavDiv>
      <Img src={mail} alt="mail-button" width="50px" />
      <Img src={ig} alt="ig-button" width="50px" />
    </OuterDiv>
  )
}

export default Home;