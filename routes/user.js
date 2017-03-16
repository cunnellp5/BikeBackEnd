var express = require('express');
var router = express.Router();
var user = require("../db/user");
var issues = require("../db/issues")

/* GET users listing. */
router.get("/bicyclist", (req, res, next) => {
  user.getAllBicyclistsByType(req.type).then(user => {
    res.json(user)
  })
});

router.get("/store", (req, res, next) => {
  user.getAllStoresByType(req.type).then(user => {
    res.json(user)
  })
});

router.get("/", (req, res, next) =>  {
  user.getAll(req.body).then(user  =>  {
    res.json(user)
  })
})


function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
