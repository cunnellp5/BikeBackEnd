var express = require('express');
var router = express.Router();
var user = require("../db/user");


// get all
router.get("/", (req, res, next) =>  {
  user.getAll(req.body).then(user  =>  {
    console.log(user);
    res.json(user)
  })
})
// add new user
// router.post("/", (req, res, next) =>  {
//     user.addNewUser(req.body).then(user  =>  {
//     res.json(req.body)
//   })
// })
/* GET bicyclists by type listing. */
router.get("/bicyclist", (req, res, next) => {
  user.getAllBicyclistsByType(req.type).then(user => {
    res.json(user)
  })
});
// get bicyclist by id
router.get('/bicyclist/:id', (req, res, next) => {
  if(!isNaN(req.params.id)){
    user.getOne(req.params.id).then(user => {
      console.log(user.type);
      if (user.type != 0) {
        delete user.password;
        res.json(user);
      } else {
        resError(res, 404, "User not Found")
      }
    });
  } else {
    resError(res, 500, "Invalid ID")
  }
})
// get store by type
router.get("/store", (req, res, next) => {
  user.getAllStoresByType(req.type).then(user => {
    res.json(user)
  })
});
// get store by type
router.get("/store/:id", (req, res, next) => {
  user.getAllStoresByType(req.type).then(user => {
    res.json(user)
  })
});

router.delete('/bicyclist/:id', function(req, res){
  console.log(req.params.id);
  user.delete(req.params.id).then(id => {
    res.json({
      message: "nice, dood"
    })
  });
});

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
