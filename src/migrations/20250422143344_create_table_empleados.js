import knex from 'knex';

export function up(knex) {
  return knex.schema.createTable('empleados', function(table) {
    table.increments('EmpleadoID').primary(); // ID autoincrementable como clave primaria
    table.string('Apellido', 20).notNullable(); // Apellido del empleado
    table.string('Nombre', 10).notNullable(); // Nombre del empleado
    table.string('Titulo', 30).nullable(); // Título del empleado, opcional
    table.string('TituloCortesia', 25).nullable(); // Título de cortesía, opcional
    table.datetime('FechaNacimiento').nullable(); // Fecha de nacimiento
    table.datetime('FechaContratacion').nullable(); // Fecha de contratación
    table.string('Direccion', 60).nullable(); // Dirección del empleado, opcional
    table.string('Ciudad', 15).nullable(); // Ciudad, opcional
    table.string('Regiones', 15).nullable(); // Regiones, opcional
    table.string('CodigoPostal', 10).nullable(); // Código postal, opcional
    table.string('Pais', 15).nullable(); // País, opcional
    table.string('Telefono', 24).nullable(); // Teléfono, opcional
    table.string('Extension', 4).nullable(); // Extensión telefónica, opcional
    table.binary('Foto').nullable(); // Foto del empleado en formato binario
    table.text('Notas').nullable(); // Notas, opcional
    table.integer('Jefe').nullable(); // ID del jefe (EmpleadoID de otro empleado)
    table.string('RutaFoto', 255).nullable(); // Ruta de la foto, opcional
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('empleados');
}
