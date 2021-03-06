const { Router } = require('express')
const router = new Router()
const { Team } = require(`./model`);
const db = require(`../db`);

router.get('/teams', (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.send(teams);
    })
    .catch(err => next(err))
});

router.get('/teams/:id', (req, res, next) => {
  Team.findByPk(req.params.id) // beware: if you want to define a const with req.params.id you have to parseInt(), because Url returns a string !!
    .then(team => {
      res.json(team); //.send for strings, .json for data. it works both but it's better practice!
    })
    .catch(err => next(err))
});

router.post(`/teams`, (req, res, next) => {
  console.log(req.body)
  Team.create(req.body)
    .then(team => {
      res.send(team);
    })
    .catch(err => next(err))
})

router.put(
  '/teams/:id',
  (request, response, next) => Team
    .findByPk(request.params.id)
    .then(team => team.update(request.body))
    .then(team => response.send(team))
    .catch(next)
)

router.delete(
  '/teams/:id',
  (request, response, next) => Team
    .destroy({ where: { id: request.params.id }})
    .then(number => response.send({ number }))
    .catch(next)
)

module.exports = router