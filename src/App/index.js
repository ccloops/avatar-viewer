import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Avatar = styled.img`
    width: 8em;
    height: 8em;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avatars: null,
      followersAreDisplayed: false,
     }
  
    this.fetchAvatars = this.fetchAvatars.bind(this);
    this.displayFollowers = this.displayFollowers.bind(this);
    this.fetchAvatars();
  }

  fetchAvatars() {
    superagent.get('/avatars')
    .then(({ body: avatars }) => this.setState({ avatars }))
    .catch(err => console.log('error'));
  }

  displayFollowers(id) {
    this.state.avatars.forEach(avatar => {
      if(avatar.id === id && avatar.followers) {
        console.log('avatar.followers', avatar.followers);
      }
    })
  }

  render() {
    console.log(this.state.avatars);
    if (this.state.avatars) {
      return (
        <Grid>
          {this.state.avatars.map(({ id, avatar_url, login }) =>
            <Avatar key={id} src={avatar_url} onMouseEnter={ () => this.displayFollowers(id) } />
          )}
        </Grid>
      )
    } else {
      return <p>loading...</p>
    }
  }
}