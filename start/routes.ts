import CategoriesController from '#controllers/categories_controller'
import AuthController from '#controllers/Http/AuthController'
import ProductsController from '#controllers/products_controller'
import User from '#models/user'
import router from '@adonisjs/core/services/router'

const productsController = new ProductsController()
const categoriesController = new CategoriesController()
const authController = new AuthController()

// Product list (home page)
router.get('/', async (ctx) => productsController.index(ctx))
router.get('/products', async (ctx) => productsController.index(ctx))

// Categories list
router.get('/categories', async (ctx) => categoriesController.index(ctx))

// Authentication routes
router.get('/login', async (ctx) => authController.showLogin(ctx)).as('login')
router.post('/login', async (ctx) => authController.login(ctx))

router.get('/register', async (ctx) => authController.showRegister(ctx))
router.post('/register', async (ctx) => authController.register(ctx))

// Protected logout route
router.post('/logout', async (ctx) => authController.logout(ctx))
  .middleware(() => import('#middleware/auth_middleware'))

// --- Product Create route must come before :id routes ---
router.get('/products/create', async (ctx) => productsController.create(ctx))
router.post('/products', async (ctx) => productsController.store(ctx))

// Product Edit / Update
router.get('/products/:id/edit', async (ctx) => productsController.edit(ctx))
router.put('/products/:id', async (ctx) => productsController.update(ctx))

// Product Delete route must be BEFORE the GET /products/:id route
router.delete('/products/:id', async (ctx) => productsController.destroy(ctx))

// Product detail page
router.get('/products/:id', async (ctx) => productsController.show(ctx))

// Session test route
router.get('/session-test', async ({ session, auth }) => {
  console.log('--- /session-test Route Hit ---')
  console.log('Session data:', session.all())
  console.log('Auth.user:', auth.user)

  const userId = session.get('auth_web')
  console.log('Session userId:', userId)

  const userFromDb = userId ? await User.find(userId) : null
  console.log('User from DB:', userFromDb)

  const loggedInUser = auth.user
//test
  return loggedInUser
    ? `Logged in as ${loggedInUser.fullName} (${loggedInUser.email})`
    : '❌ No user logged in'
})

// Product delete via POST fallback for HTML forms
router.post('/products/:id/delete', async (ctx) => productsController.destroy(ctx))
// Product update via POST fallback for HTML forms
router.post('/products/:id/update', async (ctx) => productsController.update(ctx))
// Temporary bounce redirect view
router.get('/bounce', async ({ view }) => {
  return view.render('bounce')
})
