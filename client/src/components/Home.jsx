import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OuterDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const NavDiv = styled.div`
display: flex;
justify-content: center;
// padding: 20px 0px 20px 0px;
// margin: 30px 0px 30px 0px;
`


const Home = () => {

  return (
    <OuterDiv>
      <NavDiv>
        <h1>ERASMO VIERA</h1>
      </NavDiv>
       <NavDiv>
        <Link to="/photos"><h1>photography</h1></Link>
      </NavDiv>
      <NavDiv>
        <Link to="/playlists"><h1>playlists</h1></Link>
      </NavDiv>
    </OuterDiv>
  )
}

export default Home;