export function up(knex) {
  return knex.schema.createTable('pockets', (table) => {
    table.increments('id').primary(); // ID autoincremental
    table.string('name', 100).notNullable(); // Nombre de la cartera
    table.string('description', 255).nullable(); // Descripción opcional
    table.decimal('balance', 12, 2).notNullable().defaultTo(0.00); // Saldo con precisión decimal
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE'); // Si el usuario se elimina, también se eliminan sus pockets
    table.timestamps(true, true); // created_at y updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable('pockets');
}
