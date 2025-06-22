import Product from '#models/product'; // <-- add this import
import { BaseSeeder } from '@adonisjs/lucid/seeders';
import db from '@adonisjs/lucid/services/db';

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await db.from('products').delete()  // Clear products first
    await db.rawQuery(`DELETE FROM sqlite_sequence WHERE name='products'`) // Reset autoincrement sequence

    await Product.createMany([
      {
        name: 'Laptop',
        description: 'High performance laptop',
        price: 1500,
        imagePath: 'public/laptop.jpg',
        categoryId: 1,
      },
      {
        name: 'T-Shirt',
        description: 'Cotton T-shirt',
        price: 25,
        imagePath: 'public/tshirt.png',
        categoryId: 2,
      },
      {
        name: 'Novel',
        description: 'Fiction book',
        price: 20,
        imagePath: 'public/novel.jpg',
        categoryId: 3,
      },
    ])
  }
}
 //node ace db:seed --files database/seeders/product_seeder.ts