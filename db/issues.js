const knex = require("./knex.js");

module.exports = {
    getByUser: function(id)   {
      return knex("issues").where("user.id", id)
    },
    getAllIssues: function() {
      return knex("issues")
    },
    newIssue: function(issues) {
        return knex('issues').insert(issues)
    },
    delete: function(id){
      return knex("issues").where("id", id).del()
    }
}
