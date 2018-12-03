# Avatar Viewer

## Overview

An application that displays the avatar of public GitHub repository owners. For owners with logins that start with a or A, a list of the repository owner's followers are displayed when a user hovers over the avatar image.

This application queries the GitHub API from the server and sends necessary data to the client application. This application displays GitHub repository owner's avatars starting at user 1000. This application fills a user's screen with as many avatars as possible without scrolling.

This application was built with Node version 11.1.0.

## Getting Started

To run this application, complete the following steps:

1. Navigate to the following url: https://github.com/ccloops/avatar-viewer
2. Clone the repo to your local machine: `git clone https://github.com/ccloops/avatar-viewer`
3. Run the command: `npm install`
4. Touch a `.env` file and add the following variables:
  * PORT=3000
  * GITHUB_TOKEN=yourowngithubtoken
5. Run the command: `npm start`
6. In your browser, navigate to: http://localhost:3000

## Built With

* React - Client Framework
* Superagent - Node Service API to query the GitHub repositories API
* Bootstrap - UI Components

## Authors

Catherine Looper

## License 
This application is licensed under the MIT License