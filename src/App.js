import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Grid from './Grid.js';
import Avatar from './Avatar.js';

const IMG_MARGIN = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avatars: null,
      displayedFollowers: [],
     }
  
    this.fetchAvatars = this.fetchAvatars.bind(this);
    this.renderFollowers = this.renderFollowers.bind(this);
    this.getWindowProperties = this.getWindowProperties.bind(this);
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

  renderFollowers(id) {
    this.state.avatars.forEach(avatar => {
      if(avatar.id === id && avatar.followers) {
        this.setState({ followers: avatar.followers });
      }
    })
  }

  render() {
    let { avatars, displayedFollowers, imageSize } = this.state;
    if (avatars) {
      return (
        <Grid 
          avatars={avatars}
          displayedFollowers={displayedFollowers} 
          renderFollowers={this.renderFollowers}
          imageSize={imageSize}
        >
        </Grid>
      )
    } else {
      return <p>loading...</p>
    }
  }
}