const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});

module.exports = Article;
