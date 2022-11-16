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
  height: 260px;
  overflow: hidden;
`

const PlaylistItem = ({playlist}) => {
  let start = playlist.indexOf("list/") + 5;
  let end = playlist.indexOf("si=");
  var extract = playlist.substring(start, end)
  var source = `https://open.spotify.com/embed/playlist/${extract}utm_source=generator`

  return (

      <Container>
          <Card>
            <iframe
            style={{}}
            src={source}
            width="100%" height="380" frameBorder="0"
            allowtransparency="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
            </iframe>
          </Card>
      </Container>

  )
}

export default PlaylistItem;