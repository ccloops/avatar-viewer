import React, { Fragment } from 'react';
import { Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid black;
  margin: 0 auto;
  width: 100%;
`
const AvatarImage = styled(Image)`
  right: 50%;
  transform: translateX(-50%);
  width: 10%;
`

const BackButton = styled(Button)`
  position: absolute;
  top: 20;
  right: 20;
`

export default ({ displayedFollowers, selectedAvatar, handleBackClick }) => (
  <Wrapper>
    <AvatarImage circle src={selectedAvatar} />
    <ul>
      {displayedFollowers.map(follower =>
          <li key={follower}>{follower}</li>
      )}
    </ul>
    <BackButton bsStyle="primary" onClick={handleBackClick}>x</BackButton>
  </Wrapper>
)