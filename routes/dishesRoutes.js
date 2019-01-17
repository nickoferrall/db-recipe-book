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

module.exports = router;
