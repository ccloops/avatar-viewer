import React, { Component } from 'react';
import styled from 'styled-components';

import Avatar from './Avatar.js';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ({ avatars, displayedFollowers, renderFollowers }) => (
  <Wrapper>
    {avatars.map(({id, avatar_url: avatarUrl, login, followers }) =>
      <Avatar 
        key={id} 
        id={id}
        avatarUrl={avatarUrl}
        hasFollowers={!!followers} 
        renderFollowers={renderFollowers}
      />
    )}
  </Wrapper> 
)