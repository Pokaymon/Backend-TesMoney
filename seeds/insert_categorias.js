import knex from 'knex';

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('categorias').del();

  // Inserts seed entries
  await knex('categorias').insert([
    { CategoriaID: 1, CategoriaNombre: 'Beverages', Descripcion: 'Soft drinks, coffees, teas, beers, and ales', Imagen: 'img/Beverages.jpg' },
    { CategoriaID: 2, CategoriaNombre: 'Condiments', Descripcion: 'Sweet and savory sauces, relishes, spreads, and seasonings', Imagen: 'img/Condiments.jpg' },
    { CategoriaID: 3, CategoriaNombre: 'Confections', Descripcion: 'Desserts, candies, and sweet breads', Imagen: 'img/Confections.jpg' },
    { CategoriaID: 4, CategoriaNombre: 'Dairy Productos', Descripcion: 'Cheeses', Imagen: 'img/DairyProductos.jpg' },
    { CategoriaID: 5, CategoriaNombre: 'Grains/Cereals', Descripcion: 'Breads, crackers, pasta, and cereal', Imagen: 'img/cereals.jpg' },
    { CategoriaID: 6, CategoriaNombre: 'Meat/Poultry', Descripcion: 'Prepared meats', Imagen: 'img/Meat.jpg' },
    { CategoriaID: 7, CategoriaNombre: 'Produce and som', Descripcion: 'Dried fruit and bean curd and vegetables', Imagen: 'img/produce.jpg' },
    { CategoriaID: 8, CategoriaNombre: 'Seafood', Descripcion: 'Seaweed and fish', Imagen: 'img/Seafood.jpg' },
    { CategoriaID: 9, CategoriaNombre: 'Alcoholic Bever', Descripcion: 'Beer, wine, distilled spirits, fortified wines, cocktails', Imagen: 'img/alcoholic.jpg' },
    { CategoriaID: 10, CategoriaNombre: 'Animal Food', Descripcion: 'Food, pet food, snacks, training treats', Imagen: 'img/Animal.jpg' },
    { CategoriaID: 11, CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Ropa', Imagen: 'img/Animal.jpg' },
    { CategoriaID: 12, CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Prueba7', Imagen: 'Cloud-Computing.jpg' },
    { CategoriaID: 13, CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Kevin444', Imagen: 'img/Animal.jpg' },
    { CategoriaID: 14, CategoriaNombre: 'Electrodomestic', Descripcion: 'Electrodomesticos de todas las marcas', Imagen: 'img/electro.jpg' },
    { CategoriaID: 15, CategoriaNombre: 'Vegetales', Descripcion: 'Vegetales y zanahorias', Imagen: 'img/vegetales.jpg' },
    { CategoriaID: 16, CategoriaNombre: 'Electrodomestic', Descripcion: 'Electrodomesticosxxxxx', Imagen: 'img/electrodomestico.jpg' }
  ]);
};
