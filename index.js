const express = require('express');
const helmet = require('helmet');

const server = express();

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const dishesRoutes = require('./routes/dishesRoutes');

server.use('/dishes', dishesRoutes);

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  db('instructions')
    .then(toCook => {
      res.status(200).json(toCook);
    })
    .catch(error => res.status(400).json(error));
});

// server.get('/', (req, res) => {
//   db('instructions')
//     .select('steps', 'recipe_id')
//     .from('intructions').join('recipes').on('id' = 'recipe_id').then(answer => {
//         res.status(200).json(answer)
//     })
//     .catch(error => res.status(400).json(error));
// });

server.listen(9000, () => console.log('API Running!'));

module.exports = server;
