const knex = require("./knex.js");

module.exports = {
    getByUser: function(id)   {
      return knex("issues").where("user.id", id)
    }
}
