import knex from 'knex';

export function up(knex) {
  return knex.schema.createTable('categorias', function(table) {
    table.increments('CategoriaID').primary(); // ID autoincrementable como clave primaria
    table.string('CategoriaNombre', 15).notNullable(); // Nombre de la categoría, no puede ser nulo
    table.text('Descripcion').nullable(); // Descripción de la categoría, opcional
    table.text('Imagen').nullable(); // Imagen de la categoría, opcional
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('categorias');
}
