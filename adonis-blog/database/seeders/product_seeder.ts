import Category from '#models/category'
import Product from '#models/product'

export default class ProductSeeder {
  public async run() {
    const books = await Category.findByOrFail('name', 'Books')
    const electronics = await Category.findByOrFail('name', 'Electronics')

    await Product.createMany([
      {
        name: 'Clean Code',
        description: 'A Handbook of Agile Software Craftsmanship',
        price: 49.99,
        imagePath: null,
        categoryId: books.id,
      },
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic, long battery life',
        price: 29.95,
        imagePath: null,
        categoryId: electronics.id,
      },
    ])
  }
}
