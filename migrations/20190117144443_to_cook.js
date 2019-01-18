exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments('id');
    tbl.string('dish', 180);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
