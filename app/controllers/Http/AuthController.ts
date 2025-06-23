import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { rules, schema } from '@adonisjs/validator'

export default class AuthController {
  /**
   * Render register form
   */
  public async showRegister({ view, request }: HttpContext) {
    return view.render('auth/register', {
      csrfToken: request.csrfToken,
    })
  }

  /**
   * Register a new user
   */
  public async register({ request, response, auth, session }: HttpContext) {
    const validationSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string({}, [rules.minLength(6)]),
      fullName: schema.string({ trim: true }),
    })

    try {
      const payload = await request.validate({ schema: validationSchema })

      // Check for existing user
      const existingUser = await User.findBy('email', payload.email)
      if (existingUser) {
        session.flash('error', 'Email already in use')
        return response.redirect().back()
      }

      // Create new user and login
      const user = await User.create(payload)
      await auth.use('web').login(user)

      await session.commit()  // Commit session immediately to persist login state

      console.log('User after registration login:', auth.use('web').user)
      session.flash('success', 'Registration successful!')
      return response.redirect('/bounce')
    } catch (error: any) {
      const messages = error.messages
        ? Object.values(error.messages).flat().join(' ')
        : 'An error occurred'
      session.flash('error', messages)
      return response.redirect().back()
    }
  }

  /**
   * Render login form
   */
  public async showLogin({ view, request }: HttpContext) {
    return view.render('auth/login', {
      csrfToken: request.csrfToken,
    })
  }

  /**
   * Handle login form submission
   */
  public async login({ request, response, auth, session }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.findBy('email', email)
    if (!user || !(await user.verifyPassword(password))) {
      session.flash('error', 'Invalid credentials')
      return response.redirect().back()
    }

    await auth.use('web').login(user)
    await session.commit()

    console.log('User after login:', auth.use('web').user)
    session.flash('success', 'Login successful!')
    return response.redirect('/bounce')
  }

  /**
   * Logout current user
   */
  public async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash('success', 'Logged out successfully')
    return response.redirect('/products')
  }

  /**
   * Return current logged-in user via API
   */
  public async me({ auth, response }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('Not authenticated')
    }
    return response.json(auth.user)
  }
}
