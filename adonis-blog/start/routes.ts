import router from '@adonisjs/core/services/router'

router.get('/', async ({ response }) => {
  return response.redirect('/products')
})

router.get('/products', async ({ response }) => {
  return response.send('This is the products index page')
})
