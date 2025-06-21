import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCategories extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}