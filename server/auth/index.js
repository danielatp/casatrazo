const router = require('express').Router();
const { User } = require('../db/models');

router.get('/me', (req, res, next) => {
  if(req.session.hasOwnProperty('currentUserId')) {
    User.findById(req.session.currentUserId)
    .then(currentUser => res.json(currentUser))
    .catch(next)
  } else {
    res.json({})
  }
});

router.put('/login', (req, res, next) => {
  return User.findOne({where: {email: req.body.email}})
  .then(user => {
    if(!user){
      let err = new Error('User not found')
      err.status = 401;
      throw err;
    }
    else if(!user.correctPassword(req.body.password)){
      let err = new Error('Incorrect password!');
      err.status = 401
      throw err;
    }
    else{
      req.session.currentUserId = user.id;
    }
    return user;
  })
  .then(user => res.json(user))
  .catch(next)
});

router.put('/logout', (req, res) => {
  req.session.destroy()
  res.send()
});

module.exports = router;
