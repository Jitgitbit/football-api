const { Router } = require('express')
const router = new Router()
const {Team} = require(`./model`);
const db = require(`../db`);

router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.send(teams);
    })
    .catch(err => next(err))
});

module.exports = router