
exports.seed = function(knex) {
      return knex('tasks').insert([
        {task_description:'Use terminal to run: npm i (package_name)', task_notes:'other notes for task'}
      ]);
};
