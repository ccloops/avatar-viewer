import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Avatar = styled(Image)`
    object-fit: contain;
    width: ${({ imageSize }) => imageSize}px;
    height: ${({ imageSize }) => imageSize}px;
    cursor: ${({ hasFollowers }) => hasFollowers ? 'pointer' : 'not-allowed'};
    &:nth-child(-n + 90) {
      padding-bottom: 5px;i
    }
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    position: relative;
`;



export default ({ followers, avatar_url:avatarUrl, id, handleAvatarHover, imageSize }) => (
  <Fragment>
    <Avatar 
      rounded
      hasFollowers={!!followers}
      imageSize={imageSize}
      src={avatarUrl}
      onMouseEnter={() => handleAvatarHover(id)} 
      />
  </Fragment>
)