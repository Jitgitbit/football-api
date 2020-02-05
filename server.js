const express = require('express');
// const db = require(`./db`);
// const Team = require(`./team/model`);
const teamRouter = require(`./team/router`);


const app = express();
const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
});

app.use(teamRouter);