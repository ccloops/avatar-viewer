import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Grid from './Grid.js';
import Avatar from './Avatar.js';
import List from './List.js';

const IMG_MARGIN = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avatars: null,
      displayedFollowers: null,
      selectedAvatar: null,
      selectedOwner: null,
     }
  
    this.fetchAvatars = this.fetchAvatars.bind(this);
    this.handleAvatarHover = this.handleAvatarHover.bind(this);
    this.getWindowProperties = this.getWindowProperties.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.fetchAvatars();
  }

  getWindowProperties(marginQuantity) {
    return (window.innerHeight - (((marginQuantity - 1) * IMG_MARGIN) + IMG_MARGIN * 2)) / marginQuantity;
  }

  fetchAvatars() {
    superagent
      .get('/avatars')
      .then(({ body: avatars }) => {
        const imageSize = this.getWindowProperties(avatars.length);
        this.setState({ avatars, imageSize });
      })
      .catch(err => console.log(err));
  }

  handleAvatarHover(id) {
    this.state.avatars.forEach(avatarArray => {
      const avatar = avatarArray.find(avatar => (avatar.id === id) && avatar.followers);
      if(avatar) {
        this.setState({ 
          displayedFollowers: avatar.followers, 
          selectedAvatar: avatar.avatar_url, 
          selectedOwner: avatar.login
        });
      }
    })
  }

  handleBackClick() {
    this.setState({ displayedFollowers: null, selectedAvatar: null, selectedOwner: null });
  }

  render() {
    const { avatars, displayedFollowers, selectedAvatar, selectedOwner, imageSize } = this.state;
    const { handleBackClick, handleAvatarHover } = this;

    if(displayedFollowers) {
      return (
        <List
          displayedFollowers={displayedFollowers}
          selectedAvatar={selectedAvatar}
          selectedOwner={selectedOwner}
          handleBackClick={handleBackClick}
        >
        </List>
      )
    }

    if (avatars) {
      return (
        <Grid 
          avatars={avatars}
          displayedFollowers={displayedFollowers} 
          handleAvatarHover={handleAvatarHover}
          imageSize={imageSize}
        >
        </Grid>
      )
    } 
      return <p>loading...</p>
  }
}