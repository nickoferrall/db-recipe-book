exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { recipe_id: 1, ingredients: 'Chicken', quantity: 2 },
        { recipe_id: 1, ingredients: 'Tomatoes', quantity: 4 },
        { recipe_id: 2, ingredients: 'Onions', quantity: 7 }
      ]);
    });
};
