const express = require('express');
const router = express.Router();

const User = require('../db/user');

router.get('/', (req, res) => {
  res.json({
    message: 'poopy'
  });
});

function validUser(user){
  return typeof user.email == 'string' &&
          user.email.trim() != '' &&
          typeof user.password == 'string' &&
                 user.password.trim() != '' &&
                 user.password.trim().length >= 5; //when hashing trim also
}

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  if(validUser(req.body)){
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log(user);
    res.json({
      //check if email is unique
        // if it is unique, insert user into DATABA
        // set a cookie
        // respond
      message: 'signup working 👍!'
      });
    });
  } else {
    next(new Error('invalid User'));
  }
});

module.exports = router;
