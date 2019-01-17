exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, ingredients: 'flour', quantity: 2 },
        { recipe_id: 1, ingredients: 'tomatoes', quantity: 4 },
        { recipe_id: 2, ingredients: 'pollo', quantity: 1 }
      ]);
    });
};
