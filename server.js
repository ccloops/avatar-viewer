const express = require('express');
const path = require('path');
const superagent = require('superagent');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

express()
  .use(express.static('dist'))
  .get('/avatars', (req, res) => {
    superagent.get('https://api.github.com/users?since=1000&per_page=200')
      .set('Authorization', `token ${GITHUB_TOKEN}`)
      .then(response => {
        const promises = {};
        const users = [];
        response.body.forEach(({ login, id, avatar_url, followers_url }, index) => {
          promises[`key-${index}`] = new Promise((resolve, reject) => {
            const user = { login, id, avatar_url };
            if (login[0].toLowerCase() === 'a') {
              superagent.get(followers_url)
                .then(({ body: followers }) => {
                  user.followers = followers.map(({ login }) => login);
                  users.push(user);
                  resolve();
                })
                .catch(err => reject(err));
            } else {
              // delete user.login;
              users.push(user) && resolve();
            }
          });
        });
        Promise.all([...Object.values(promises)])
          .then(() => res.send(users))
          .catch(({ response }) => console.log(response.body.message) || res.status(500).send());
      })
      .catch(({ response }) => console.log(response.body.message) || res.status(500).send());
  })
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
  })
  .listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));