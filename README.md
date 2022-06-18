# rebluebot
## Installation
### Requirements
* [Node.js](https://nodejs.org)

Open console in project root folder and run command `npm i`

## Config
### Bot token and app client ID 
In *src\config\default.js* change `token` and `clientId` values to your bot token and application client ID respectively.

## Run app
`npm start`

## Custom config
1. Make a copy of *src\config\default.js* as *src\config\\[config_name].js* 
2. Add custom config properties to module.exports object
3. Run app with set environment variable NODE_ENV:
    * Windows: `SET NODE_ENV=[config_name] & npm start` 
    * Linux: `NODE_ENV=[config_name] npm start`
