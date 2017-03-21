exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", function(table){
    table.increments();
    table.text("firstName").notNullable();
    table.text("lastName");
    table.text("password").notNullable();
    table.text("phone").notNullable();
    table.boolean("isActive");
    table.text("location");
    table.text("image");
    table.integer("type").notNullable();
    table.text("email");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
