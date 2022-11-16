import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding: 20px 0px 20px 0px;
margin: 30px 0px 30px 0px;
`
const Card = styled.div`
  width: 1000px;
`

const PhotoItem = ({photo}) => {

  return (
    <Container>
      <Card>
      <img src={photo} width="100%" />
      </Card>
    </Container>
  )
}

export default PhotoItem;