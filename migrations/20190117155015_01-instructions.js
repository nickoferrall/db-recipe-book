exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
    tbl.increments('id');
    tbl
      .integer('recipe_id')
      .references('recipe_id')
      .inTable('recipes');
    tbl.string('steps', 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructions');
};
