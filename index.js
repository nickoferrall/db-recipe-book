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
  db('dishes')
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

server.get('/dishes/:id/ingredients', async (req, res) => {
  try {
    const { id } = req.params;
    const dishes = await db('dishes').where({ id: id[0] });
    const recipes = await db('recipes').where({ recipe_id: id });
    const eachRecipe = recipes.map(word => `Recipe: ${word.recipe}`);
    const eachDish = dishes.map(word => `Dish: ${word.dish}`);
    const answer = [eachRecipe, eachDish];
    res.status(200).json(answer);
  } catch (error) {
    res.status(400).json({ message: 'Error.' });
  }
});

// server.get('/recipes', async (req, res) => {
//   try {
//     const dishes = await db('dishes');
//     console.log('dishes =', dishes[0].id, dishes);
//     const recipes = await db('recipes');
//     console.log('recipes', recipes);
//     const eachRecipe = recipes.map(
//       word => console.log('word =', word) //`${word.id === recipes.recipe_id ? word.dish : null}`
//     );
//     console.log('each..', eachRecipe);
//     const eachDish = dishes.map(word => `Dish: ${word.dish}`);
//     const answer = [eachRecipe, eachDish];
//     let result = [];
//     for (let i = 0; i < recipes.length; i++) {}
//     res.status(200).json(answer);
//   } catch (error) {
//     res.status(400).json({ message: 'Error.' });
//   }
// });

server.listen(9000, () => console.log('API Running!'));

module.exports = server;
