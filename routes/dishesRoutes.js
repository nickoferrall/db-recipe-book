const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const responseStatus = {
  success: 200,
  postCreated: 201,
  badRequest: 400,
  notFound: 404,
  serverError: 500
};

router.get('/', (req, res) => {
  db('to_cook')
    .then(dishes => {
      res.status(responseStatus.success).json(dishes);
    })
    .catch(err => res.status(responseStatus.serverError).json(err));
});

// router.post('/', async (req, res) => {
//   try {
//     const ids = await db('to_cook').insert(req.body);
//     const dishes = await db('to_cook').where({ id: ids[0] });
//     res.status(responseStatus.postCreated).json(dishes);
//   } catch (error) {
//     console.log('error = ', error);
//     res
//       .status(responseStatus.serverError)
//       .json({ message: 'Error adding cohort.' });
//   }
// });

module.exports = router;
