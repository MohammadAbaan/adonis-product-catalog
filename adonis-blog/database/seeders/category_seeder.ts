import Category from '#models/category'

export default class CategorySeeder {
  public async run() {
    await Category.createMany([
      { name: 'Books' },
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Home & Kitchen' },
    ])
  }
}

