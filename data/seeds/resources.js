
exports.seed = function(knex) {
      return knex('resource').insert([
        {resource_name: 'npm', resource_description:'package installer', project_id:1}
      ]);
};
