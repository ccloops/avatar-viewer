import React, { Fragment } from 'react';
import { Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px inset white;
  margin: 0 auto;
  width: 90%;
  height: 90%;
  padding: 20px;
  position: relative;
  margin-top: 50px;
`

const UserName = styled.h1`
  text-align: center;
  font-size: 2em;
`

const FollowersTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;
`

const AvatarImage = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 10%;
`

const ListElement = styled.li`
  text-align: center;
`

const BackButton = styled(Button)`
  position: absolute;
  left: 95%;
  top: 2%;
`

export default ({ displayedFollowers, selectedAvatar, selectedOwner, handleBackClick }) => (
  <Wrapper>
    <AvatarImage circle src={selectedAvatar} />
    <UserName>GitHub Account Owner: {selectedOwner}</UserName>
    <FollowersTitle>Followers:</FollowersTitle>
    <ul>
      {displayedFollowers.map(follower =>
          <ListElement key={follower}>{follower}</ListElement>
      )}
    </ul>
    <BackButton bsStyle="primary" onClick={handleBackClick}>x</BackButton>
  </Wrapper>
)