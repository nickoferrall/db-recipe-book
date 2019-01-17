exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('to_cook')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('to_cook').insert([
        { Dish: 'Pizza', Recipe: 'Sicilian' },
        { Dish: 'Tacos', Recipe: 'Tex-Mex' },
        { Dish: 'Curry', Recipe: 'Methi Malai' }
      ]);
    });
};
