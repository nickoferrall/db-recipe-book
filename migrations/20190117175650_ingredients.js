exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    tbl.increments('id');
    tbl
      .integer('recipe_id')
      .references('recipe_id')
      .inTable('recipes');
    tbl.string('ingredients', 255);
    tbl.float('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
