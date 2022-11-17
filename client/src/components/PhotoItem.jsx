import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding: 60px 0px 60px 0px;
margin: 60px 0px 60px 0px;
`
const Card = styled.div`
  width: 1000px;
`

const PhotoItem = ({photo}) => {

  const openFullscreen = () => {
    document.getElementById('image')?.requestFullscreen()
  }

  return (
    <Container>
      <Card>
      <img src={photo} width="100%" onClick={(e) => openFullscreen(target.value)}/>
      </Card>
    </Container>
  )
}

export default PhotoItem;