import knex from 'knex'; // Importamos knex

export const seed = async (knex) => {
  await knex('empleados').del();  // Limpiar la tabla antes de insertar nuevos datos

  await knex('empleados').insert([
    { EmpleadoID: 1, Apellido: 'Davolio', Nombre: 'Nancy', Titulo: 'Sales Representative', TituloCortesia: 'Ms.', FechaNacimiento: '1968-12-08', FechaContratacion: '1992-05-01', Direccion: '507 - 20th Ave. E.', Ciudad: 'Seattle', Pais: 'USA', Telefono: '(206) 555-9857' },
    { EmpleadoID: 2, Apellido: 'Fuller', Nombre: 'Andrew', Titulo: 'Vice President, Sales', TituloCortesia: 'Dr.', FechaNacimiento: '1952-02-19', FechaContratacion: '1992-08-14', Direccion: '908 W. Capital Way', Ciudad: 'Tacoma', Pais: 'USA', Telefono: '(206) 555-9482' },
    { EmpleadoID: 3, Apellido: 'Leverling', Nombre: 'Janet', Titulo: 'Sales Representative', TituloCortesia: 'Ms.', FechaNacimiento: '1963-08-30', FechaContratacion: '1992-04-01', Direccion: '722 Moss Bay Blvd.', Ciudad: 'Kirkland', Pais: 'USA', Telefono: '(206) 555-3412' },
    { EmpleadoID: 4, Apellido: 'Peacock', Nombre: 'Margaret', Titulo: 'Sales Representative', TituloCortesia: 'Mrs.', FechaNacimiento: '1953-09-19', FechaContratacion: '1993-05-03', Direccion: '4110 Old Redmond Rd.', Ciudad: 'Redmond', Pais: 'USA', Telefono: '(206) 555-8122' },
    { EmpleadoID: 5, Apellido: 'Buchanan', Nombre: 'Steven', Titulo: 'Sales Manager', TituloCortesia: 'Mr.', FechaNacimiento: '1955-03-04', FechaContratacion: '1993-10-17', Direccion: '14 Garrett Hill', Ciudad: 'London', Pais: 'UK', Telefono: '(171) 555-2282' },
    { EmpleadoID: 6, Apellido: 'Suyama', Nombre: 'Michael', Titulo: 'Sales Representative', TituloCortesia: 'Mr.', FechaNacimiento: '1964-07-02', FechaContratacion: '1993-11-12', Direccion: 'Coventry House Miner Rd.', Ciudad: 'London', Pais: 'UK', Telefono: '(171) 555-2555' },
    { EmpleadoID: 7, Apellido: 'King', Nombre: 'Robert', Titulo: 'Sales Representative', TituloCortesia: 'Mr.', FechaNacimiento: '1963-05-29', FechaContratacion: '1994-01-02', Direccion: 'Edgeham Hollow Winchester Way', Ciudad: 'London', Pais: 'UK', Telefono: '(171) 555-5598' },
    { EmpleadoID: 8, Apellido: 'Callahan', Nombre: 'Laura', Titulo: 'Inside Sales Coordinator', TituloCortesia: 'Ms.', FechaNacimiento: '1958-01-09', FechaContratacion: '1994-03-05', Direccion: '1420 Washington Ave.', Ciudad: 'Seattle', Pais: 'USA', Telefono: '(206) 555-1189' },
    { EmpleadoID: 9, Apellido: 'Dodsworth', Nombre: 'Anne', Titulo: 'Sales Representative', TituloCortesia: 'Ms.', FechaNacimiento: '1966-01-27', FechaContratacion: '1995-05-01', Direccion: '29 King\'s Way', Ciudad: 'London', Pais: 'UK', Telefono: '(171) 555-4444' },
    { EmpleadoID: 10, Apellido: 'Mejia', Nombre: 'Kevin', Titulo: 'Ing. Sistemas y Software', TituloCortesia: null, FechaNacimiento: '1990-07-12', FechaContratacion: '2015-09-01', Direccion: 'Av. Siempre Viva 123', Ciudad: 'Bogotá', Pais: 'Colombia', Telefono: '300-555-1234' },
    { EmpleadoID: 11, Apellido: 'Mejia', Nombre: 'Kevin', Titulo: 'Ing. Sistemas y Software', TituloCortesia: null, FechaNacimiento: '1992-04-15', FechaContratacion: '2017-02-18', Direccion: 'Calle Ficticia 456', Ciudad: 'Medellín', Pais: 'Colombia', Telefono: '310-555-5678' }
  ]);
};

