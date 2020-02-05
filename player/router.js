const { Router } = require('express')
const router = new Router()
const {Player} = require(`./model`);
const db = require(`../db`);
const { Team } = require(`../team/model`);

router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(players => {
      res.send(players);
    })
    .catch(err => next(err))
});

router.get('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] }) // beware: if you want to define a const with req.params.id you have to parseInt(), because Url returns a string !!
    .then(player => {
      res.json(player); //send for strings, json for data. it works both but it's better practice!
    })
    .catch(err => next(err))
});

router.post(`/player`, (req, res, next) => {
  console.log(req.body)
  Player.create(req.body)
    .then(player => {
      res.send(player);
    })
    .catch(err => next(err))
})

router.put(`/player/:id`, (req, res, next) => {
  Player.find({
    where: {
      id: req.params.id
    }
  }).then(player => {
    if(player) {
      player.updateAttributes({
        name: req.body.name,
        number: req.body.number
      }).then((player) => {
        res.send(player);
      })
    } 
  })
});

module.exports = router
