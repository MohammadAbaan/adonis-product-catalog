import Category from '#models/category'
import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ view, request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10

    // If clear button is clicked, reset filters
    const clear = request.input('clear')
    let search = ''
    let categoryFilter = ''

    if (!clear) {
      search = request.input('search')
      categoryFilter = request.input('category')
    }

    const query = Product.query().preload('category')

    if (search) {
      query.where('name', 'like', `%${search}%`)
    }

    if (categoryFilter) {
      query.where('category_id', categoryFilter)
    }

    const products = await query.paginate(page, limit)
    products.baseUrl('/products')

    const categories = await Category.all()

    return view.render('pages/products/index', {
      products,
      categories,
      search,
      categoryFilter,
      baseUrl: '/products',
    })
  }

  async show({ params, view }: HttpContext) {
    const product = await Product.query()
      .where('id', params.id)
      .preload('category')
      .firstOrFail()

    return view.render('pages/products/show', { product })
  }
}
