export function up(knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.increments('id').primary(); // ID autoincremental
    table
      .enum('type', ['income', 'expense'])
      .notNullable(); // ingreso o gasto
    table.string('description', 255).notNullable(); // Descripción
    table.decimal('amount', 12, 2).notNullable(); // Valor positivo
    table
      .integer('pocket_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('pockets')
      .onDelete('CASCADE'); // Si la billetera se borra, sus transacciones también
    table.timestamp('created_at').defaultTo(knex.fn.now()); // Fecha de creación
  });
}

export function down(knex) {
  return knex.schema.dropTable('transactions');
}
