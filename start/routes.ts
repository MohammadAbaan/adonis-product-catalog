import CategoriesController from '#controllers/categories_controller'
import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

// Product list (home page)
router.get('/', [ProductsController, 'index'])

router.get('/products', [ProductsController, 'index'])

// Product detail page
router.get('/products/:id', [ProductsController, 'show'])

// Categories list
router.get('/categories', [CategoriesController, 'index'])
