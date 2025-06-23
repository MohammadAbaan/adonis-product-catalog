import Category from '#models/category'
import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { rules, schema } from '@adonisjs/validator'

export default class ProductsController {
  /**
   * Display paginated list of products
   * Supports search and category filter query params
   */
  public async index({ view, request, auth, session }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10

    const clear = request.input('clear')
    const search = clear ? '' : request.input('search') || ''
    const categoryFilter = clear ? '' : request.input('category') || ''

    // Build query and preload category relationship
    const query = Product.query().preload('category')

    // If search value exists, filter by product name
    if (search) {
      query.where('name', 'like', `%${search}%`)
    }

    // If category filter selected, filter by category_id
    if (categoryFilter) {
      query.where('category_id', categoryFilter)
    }

    // Fetch paginated products
    const products = await query.paginate(page, limit)
    products.baseUrl('/products')

    // Fetch all categories for the filter dropdown
    const categories = await Category.all()

    // Render products list page with data
    return view.render('pages/products/index', {
      products,
      categories,
      search,
      categoryFilter,
      baseUrl: '/products',
      isLoggedIn: !!auth.user,
      user: auth.user,
      successMessage: session.get('success'),
      errorMessage: session.get('error'),
      csrfToken: request.csrfToken,
    })
  }

  /**
   * Show single product details
   */
  public async show({ params, view }: HttpContext) {
    const product = await Product.query()
      .where('id', params.id)
      .preload('category')
      .firstOrFail()

    return view.render('pages/products/show', { product })
  }

  /**
   * Render create product form
   */
  public async create({ view, request }: HttpContext) {
    const categories = await Category.all()
    return view.render('pages/products/create', {
      categories,
      csrfToken: request.csrfToken,
    })
  }

  /**
   * Store a new product in database
   */
  public async store({ request, response, session }: HttpContext) {
    // Validate form input
    const productSchema = schema.create({
      name: schema.string({}, [rules.maxLength(255)]),
      description: schema.string(),
      price: schema.number(),
      categoryId: schema.number(),
      image: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'jpeg', 'png', 'gif'],
      }),
    })

    const validatedData = await request.validate({ schema: productSchema })

    // Handle image upload if present
    let imagePath = ''
    const imageFile = request.file('image')
    if (imageFile) {
      const fileName = `${new Date().getTime()}.${imageFile.extname}`
      await imageFile.move(app.publicPath('uploads'), { name: fileName, overwrite: true })
      imagePath = `/uploads/${fileName}`
    }

    // Create new product record
    await Product.create({
      name: validatedData.name,
      description: validatedData.description,
      price: validatedData.price,
      categoryId: validatedData.categoryId,
      imagePath,
    })

    session.flash('success', 'Product created successfully')
    return response.redirect('/products')
  }

  /**
   * Render edit product form
   */
  public async edit({ params, view, request }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const categories = await Category.all()
    return view.render('pages/edit', {
      product,
      categories,
      csrfToken: request.csrfToken,
    })
  }

  /**
   * Update existing product
   */
  public async update({ params, request, response, session }: HttpContext) {
    console.log('➡️ Updating product id:', params.id)
    const product = await Product.findOrFail(params.id)

    const productSchema = schema.create({
      name: schema.string({}, [rules.maxLength(255)]),
      description: schema.string(),
      price: schema.number(),
      categoryId: schema.number(),
      image: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'jpeg', 'png', 'gif'],
      }),
    })

    const validatedData = await request.validate({ schema: productSchema })

    // Handle image replacement if new one uploaded
    const imageFile = request.file('image')
    if (imageFile) {
      const fileName = `${new Date().getTime()}.${imageFile.extname}`
      await imageFile.move(app.publicPath('uploads'), { name: fileName, overwrite: true })
      product.imagePath = `/uploads/${fileName}`
    }

    // Update product fields
    product.name = validatedData.name
    product.description = validatedData.description
    product.price = validatedData.price
    product.categoryId = validatedData.categoryId

    await product.save()

    session.flash('success', 'Product updated successfully')
    return response.redirect(`/products/${product.id}`)
  }

  /**
   * Delete product
   */
  public async destroy({ params, response, session }: HttpContext) {
    console.log('🗑️ Deleting product id:', params.id)
    const product = await Product.findOrFail(params.id)
    await product.delete()

    session.flash('success', 'Product deleted successfully')
    return response.redirect('/products')
  }
}
