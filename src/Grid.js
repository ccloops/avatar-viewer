import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar.js';

const Grid = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export default ({ avatars, ...props }) => (
  <Grid>
    {avatars.map(subArray => 
      <Row>
        {subArray.map(({ id, ...avatarData }) => (
          <Avatar
            key={id}
            id={id}
            {...props}
            {...avatarData}
          />
        ))}
      </Row>
    )}
  </Grid> 
)