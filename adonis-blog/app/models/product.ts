import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Category from './category.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare public id: number

  @column()
  declare public name: string

  @column()
  declare public description: string

  @column()
  declare public price: number

  @column()
  declare public imagePath: string | null

  @column()
  declare public categoryId: number

  @belongsTo(() => Category)
  declare public category: BelongsTo<typeof Category>
}
