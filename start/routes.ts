import CategoriesController from '#controllers/categories_controller'
import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

// Product list (home page)
router.get('/', [ProductsController, 'index'])

router.get('/products', [ProductsController, 'index'])

// Categories list
router.get('/categories', [CategoriesController, 'index'])
