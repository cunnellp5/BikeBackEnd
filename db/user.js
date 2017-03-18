const knex = require("./knex.js");

module.exports = {
    getOne: function(id)   {
        return knex("user").where("id", id).first();
    },
    getOneByEmail: function(email)   {
        return knex("user").where("email", email).first();
    },
    getAllBicyclistsByType: function(type){
        return knex('user').where('type', 1);
    },
    getAllStoresByType: function(type){
        return knex('user').where('type', 0);
    },
    getAll: function()  {
        return knex('user');
    },
    addNewUser: function(bicyclist) {
        return knex('user').insert(bicyclist)
    },
    delete: function(id)  {
        // var updatedColumn = {
        //     isActive: false
        // }
        // console.log(updatedColumn)
        return knex("user").where("id", id).del()
    }
}
