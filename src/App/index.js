import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

const Grid = styled.div`

`;

const Avatar = styled.img`
    width: 2em;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { avatars: null }
    superagent.get('/avatars')
      .then(({ body: avatars }) => this.setState({ avatars }))
      .catch(err => console.log('error'));
  }

  render() {
    console.log(this.state.avatars);
    if (this.state.avatars) {
      return (
        <Grid>
          {this.state.avatars.map(({ id, avatar_url, login }) =>
            <Avatar key={id} src={avatar_url} />
          )}
        </Grid>
      )
    } else {
      return <p>loading...</p>
    }
  }
}