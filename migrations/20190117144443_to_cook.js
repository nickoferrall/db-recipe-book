exports.up = function(knex, Promise) {
  return knex.schema.createTable('to_cook', function(tbl) {
    tbl.increments('ID');
    tbl.string('Dish', 180);
    tbl.string('Recipe', 180);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('to_cook');
};
