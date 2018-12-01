import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Avatar = styled(Image)`
    width: 8em;
    height: 8em;
    cursor: ${({ hasFollowers }) => hasFollowers ? 'pointer' : 'not-allowed'};
`;

export default ({ hasFollowers, avatarUrl, renderFollowers, id }) => (
  <Avatar 
    hasFollowers={hasFollowers}
    src={avatarUrl}
    onMouseEnter={() => renderFollowers(id)} 
  />
)