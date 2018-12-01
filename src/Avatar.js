import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Avatar = styled(Image)`
    object-fit: contain;
    width: ${({ imageSize }) => imageSize}px;
    height: ${({ imageSize }) => imageSize}px;
    cursor: ${({ hasFollowers }) => hasFollowers ? 'pointer' : 'not-allowed'};
    &:nth-child(-n + 90) {
      padding-bottom: 5px;
    }
`;

export default ({ followers, avatar_url:avatarUrl, id, renderFollowers, imageSize }) => console.log('imageSize', imageSize) || (
  <Avatar 
    rounded
    hasFollowers={!!followers}
    imageSize={imageSize}
    src={avatarUrl}
    onMouseEnter={() => renderFollowers(id)} 
  />
)