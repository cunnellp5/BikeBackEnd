exports.up = function(knex, Promise) {
  return knex.schema.createTable("issues", function(table){
    table.increments();
    table.text("message");
    table.text("biketube");
    table.boolean("bikechain");
    table.text("location");
    table.boolean("cash").notNullable();
    table.timestamps();

    table.boolean("isActive").nullable().defaultTo(false);

    table.integer("issuer").unsigned();
    table.foreign("issuer").references("user.id");

    table.integer("responder").unsigned();
    table.foreign("responder").references("user.id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("issues");
};
