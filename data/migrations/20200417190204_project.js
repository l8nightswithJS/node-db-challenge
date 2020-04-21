
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('project_description', 128);
        tbl.boolean('project_completed')
        .defaultTo(0);  
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .notNullable()
            .unique()
        tbl.string('resource_description', 128)    
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description', 128)
            .notNullable();
        tbl.string('task_notes', 128);
        tbl.boolean('task_completed')
            .defaultTo(0);
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resource')
    .dropTableIfExists('tasks');
};
