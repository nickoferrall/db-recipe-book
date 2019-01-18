exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id');
    tbl
      .integer('recipe_id')
      .references('id')
      .inTable('dishes');
    tbl.string('recipe');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
