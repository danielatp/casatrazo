const router = require('express').Router();
const { Article } = require('../db/models');

router.get('/', (req, res, next) => {
  Article.findAll()
  .then(articles => res.json(articles))
  .catch(next)
})

router.get('/:articleId', (req, res, next) => {
  Article.findById(req.params.articleId)
  .then(article => res.json(article))
  .catch(next)
})

module.exports = router;
