import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({ view }: HttpContext) {
    const categories = await Category.all()
    return view.render('categories/index', { categories })
  }
}
