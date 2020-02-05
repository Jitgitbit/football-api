const express = require('express');
// const db = require(`./db`);
// const Team = require(`./team/model`);
const teamRouter = require(`./team/router`);
const bodyParser = require(`body-parser`);
const playerRouter = require('./player/router')
const jsonParser = bodyParser.json()



const app = express();
const port = process.env.PORT || 4000;

app.use(jsonParser);//order matters!!!!!!!


app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () => {
    console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
  });