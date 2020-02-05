const express = require('express');
const db = require(`./db`);
const team = require(`./team/model`)


const app = express();
const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
});

