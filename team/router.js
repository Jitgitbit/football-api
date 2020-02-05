const { Router } = require('express')
const router = new Router()
const Team = require(`./model`);

router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(team => {
      res.send(teams);
    })
    .catch(err => next(err))
});

module.exports = router