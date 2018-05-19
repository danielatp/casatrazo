const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => res.json(user))
  .catch(next)
})

module.exports = router;
