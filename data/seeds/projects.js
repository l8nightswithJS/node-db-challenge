
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'Create React App Template', project_description: 'Implement react app with all necessary npm packages'}
      ]);
};
