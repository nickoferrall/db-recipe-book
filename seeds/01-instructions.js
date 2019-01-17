exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, steps: 'Put the dough in the oven' },
        { recipe_id: 1, steps: 'Smear the tomatoes on the dough' },
        { recipe_id: 2, steps: 'Open Uber Eats' }
      ]);
    });
};
