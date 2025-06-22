import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    await db.from('categories').delete()
    // Reset autoincrement sequence so IDs start from 1 again
    await db.rawQuery(`DELETE FROM sqlite_sequence WHERE name='categories'`)

    await db.table('categories').insert([
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Books' },
    ])
  }
}

//node ace db:seed --files database/seeders/category_seeder.ts