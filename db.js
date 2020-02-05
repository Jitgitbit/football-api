const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL ||  'postgres://postgres:secret@localhost:5432/postgres');
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
  .sync({ force: true })// forces by overwriting,  the latest change counts!
  // .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = db