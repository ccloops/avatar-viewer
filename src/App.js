import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Grid from './Grid.js';
import Avatar from './Avatar.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avatars: null,
      displayedFollowers: [],
     }
  
    this.fetchAvatars = this.fetchAvatars.bind(this);
    this.renderFollowers = this.renderFollowers.bind(this);
    this.fetchAvatars();
  }

  fetchAvatars() {
    superagent.get('/avatars')
    .then(({ body: avatars }) => this.setState({ avatars }))
    .catch(err => console.log('error'));
  }

  renderFollowers(id) {
    this.state.avatars.forEach(avatar => {
      if(avatar.id === id && avatar.followers) {
        console.log('avatar.followers', avatar.followers); 
        this.setState({ followers: avatar.followers });
      }
    })
  }

  render() {
    const { avatars, displayedFollowers } = this.state;
    if (avatars) {
      return (
        <Grid 
          avatars={avatars}
          displayedFollowers={displayedFollowers} 
          renderFollowers={this.renderFollowers}
        >
        </Grid>
      )
    } else {
      return <p>loading...</p>
    }
  }
}