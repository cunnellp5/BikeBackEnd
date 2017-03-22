const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../db/user');

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  });
});

function validUser(user){
  return typeof user.email == 'string' &&
          user.email.trim() != '' &&
          typeof user.password == 'string' &&
                 user.password.trim() != '' &&
                 user.password.trim().length >= 3;
}

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  if(validUser(req.body)){
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log('user', user);
        if (!user) {
          bcrypt.hash(req.body.password, 10)
          .then((hash) => {
            const user = {
              email: req.body.email,
              password: hash,
              firstName: req.body.firstName,
              phone: req.body.phone,
              type: req.body.type
            };

              User
                .create(user)
                .then(id => {
                  res.json({
                    id,
                    message: 'signup tworking 👍!'
                  });
              });
          });
        } else {
          next(new Error("email in use"));
        }
    });
  } else {
    next(new Error('invalid User'));
  }
});

router.post('/login', (req, res, next) => {
  if (validUser(req.body)) {
    //check to see if in DB
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log('user', user);
        if (user) {
          bcrypt
              .compare(req.body.password, user.password)
              .then((result) => {
                if (result) {
                  //setting the set-cookie header
                  const isSecure = req.app.get('env') != 'development';
                  res.cookie('user_id', user.id, {
                    httpOnly: true,
                    secure: isSecure,
                    signed: true
                  });
                  res.json({
                    message: user.id,
                    type: user.type
                  })
                } else {
                  next(new Error("Invalid login"))
                }
          });
        } else {
          next(new Error('Invalid login'));
        }
      })
  } else {
    next(new Error('invalid login'));
  }
})

module.exports = router;
