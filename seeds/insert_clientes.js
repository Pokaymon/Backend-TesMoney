import knex from 'knex'; // Asegúrate de que knex esté correctamente importado

export const seed = async (knex) => {
  await knex('clientes').del();  // Limpiar la tabla antes de insertar nuevos datos

  await knex('clientes').insert([
    { ClienteID: 'ALFKI', Compania: 'Alfreds Futterkiste', Contacto: 'Maria Anders', Titulo: 'Sales Representative', Direccion: 'Obere Str. 57', Ciudad: 'Berlin', Pais: 'Germany', Telefono: '030-0074321' },
    { ClienteID: 'ANATR', Compania: 'Ana Trujillo Emparedados y helados', Contacto: 'Ana Trujillo', Titulo: 'Owner', Direccion: 'Avda. de la Constitución 2222', Ciudad: 'México D.F.', Pais: 'Mexico', Telefono: '(5) 555-4729' },
    { ClienteID: 'ANTON', Compania: 'Antonio Moreno Taquería', Contacto: 'Antonio Moreno', Titulo: 'Owner', Direccion: 'Mataderos 2312', Ciudad: 'México D.F.', Pais: 'Mexico', Telefono: '(5) 555-3932' },
    { ClienteID: 'AROUT', Compania: 'Around the Horn', Contacto: 'Thomas Hardy', Titulo: 'Sales Representative', Direccion: '120 Hanover Sq.', Ciudad: 'London', Pais: 'UK', Telefono: '(171) 555-7788' },
    { ClienteID: 'BERGS', Compania: 'Berglunds snabbköp', Contacto: 'Christina Berglund', Titulo: 'Order Administrator', Direccion: 'Berguvsvägen  8', Ciudad: 'Luleå', Pais: 'Sweden', Telefono: '0921-12 34 65' }
    // Aquí puedes continuar agregando más registros si es necesario
  ]);
};

