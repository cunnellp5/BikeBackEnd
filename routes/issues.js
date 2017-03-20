var express = require('express');
var router = express.Router();
// var user = require("../db/user");
var issues = require("../db/issues")

router.get("/", (req, res, next) =>  {
  console.log("fuckme");
  issues.getAllIssues(req.body).then(issues  =>  {
    console.log(issues);
    res.json(issues)
  })
})

router.post("/", (req, res, next) =>  {
    issues.newIssue(req.body).then(issues  =>  {
      console.log(req.body);
    res.json(req.body)
  })
})

router.delete('/:id', function(req, res){
  console.log(req.params.id);
  issues.delete(req.params.id).then(id => {
    res.json({
      message: "oops"
    })
  });
});


function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
