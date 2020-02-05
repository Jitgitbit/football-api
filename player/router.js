const { Router } = require('express')
const router = new Router()
const {Player} = require(`./model`);
const db = require(`../db`);


module.exports = router