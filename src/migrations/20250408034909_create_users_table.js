export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username', 100).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('password', 255).notNullable(); // Se espera que sea hasheada
    table.timestamps(true, true); // created_at y updated_at con default a NOW()
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}
