const express = require('express');
// const db = require(`./db`);
// const Team = require(`./team/model`);
const teamRouter = require(`./team/router`);
const bodyParser = require(`body-parser`);
const playerRouter = require('./player/router')
const cors = require(`cors`);


const app = express();
const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()


const port = process.env.PORT || 4001;

app.use(corsMiddleware);  //order matters!!!!!!!
app.use(parserMiddleware)

app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () => {
    console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
  });

  
  
  
  
  
  

  
  
  