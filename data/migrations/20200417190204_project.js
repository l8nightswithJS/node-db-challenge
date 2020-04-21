
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .unique()
            .notNullable();
        tbl.string('project_description', 128);
        tbl.boolean('project_completed')
        .notNullable()
        .default(false);  
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .unique()
            .notNullable();
        tbl.string('resource_description', 128)    
        tbl.boolean('resource_completed')
            .notNullable()
            .default(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description', 128)
            .unique()
            .notNullable();
        tbl.string('task_notes', 128);
        tbl.boolean('task_completed')
            .notNullable()
            .default(false);
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resource')
    .dropTableIfExists('tasks');
};
