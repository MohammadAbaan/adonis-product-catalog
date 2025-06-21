import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare public id: number

  @column()
  declare public name: string

  @hasMany(() => Product)
  declare public products: HasMany<typeof Product>
}
