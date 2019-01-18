exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, recipe: 'flour' },
        { recipe_id: 1, recipe: 'tomatoes' },
        { recipe_id: 2, recipe: 'pollo' }
      ]);
    });
};
