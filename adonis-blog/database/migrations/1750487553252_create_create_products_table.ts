import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateProducts extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.decimal('price', 12, 2).notNullable()
      table.string('image_path').nullable()
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}