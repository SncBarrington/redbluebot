# redbluebot
## Try it out
https://discord.com/api/oauth2/authorize?client_id=810200441752387634&permissions=3072&scope=bot%20applications.commands
## Installation
### Requirements
* [Node.js](https://nodejs.org)

Open console in project root folder and run command `npm i`

## Config
### Bot token
In *src\config\default.js* change token value to your bot token

## Run app
`npm start`

## Custom config
1. Make a copy of *src\config\default.js* as *src\config\\[config_name].js* 
2. Add custom config properties to config object
3. Run app with set environment variable NODE_ENV:
    * Windows: `SET NODE_ENV=[config_name] & npm start` 
    * Linux: `NODE_ENV=[config_name] npm start`
