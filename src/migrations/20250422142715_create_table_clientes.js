import knex from 'knex';

export function up(knex) {
  return knex.schema.createTable('clientes', function(table) {
    table.increments('ClienteID').primary(); // Definimos ClienteID como un campo autoincrementable
    table.string('Compania', 40).notNullable(); // Nombre de la compañía, no puede ser nulo
    table.string('Contacto', 30).nullable(); // Nombre del contacto, opcional
    table.string('Titulo', 30).nullable(); // Título del contacto, opcional
    table.string('Direccion', 60).nullable(); // Dirección del contacto, opcional
    table.string('Ciudad', 15).nullable(); // Ciudad, opcional
    table.string('Regiones', 15).nullable(); // Regiones, opcional
    table.string('CodigoPostal', 10).nullable(); // Código postal, opcional
    table.string('Pais', 15).nullable(); // País, opcional
    table.string('Telefono', 24).nullable(); // Teléfono, opcional
    table.string('Fax', 24).nullable(); // Fax, opcional
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('clientes');
}
