const knex = require("./knex.js");

module.exports = {
    getOne: function(id)   {
        return knex("user").where("id", id).first();
    },
    getBicyclistByType: function(type){
        return knex('user').where('type', 1).first();
    },
    getStoreByType: function(type){
        return knex('user').where('type', 0).first();
    },
    getAll: function()  {
        return knex('user');
    },
    makeActive: function(id)  {
        var updatedColumn = {
            isActive: true
        }
        console.log(updatedColumn)
        return knex("user").where("id", id).update(updatedColumn)
    }
}
