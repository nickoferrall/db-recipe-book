exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id');
    tbl
      .integer('recipe_id')
      .references('ID')
      .inTable('to_cook');
    tbl.string('ingredients');
    tbl.float('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
