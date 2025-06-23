import type { Authenticators } from '@adonisjs/auth/types'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Auth middleware is used to authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class AuthMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  public redirectTo = '/login'

  public async handle(
    ctx: HttpContext,
    next: NextFn,
    options: { guards?: (keyof Authenticators)[] } = {}
  ) {
    try {
      // Authenticate using the provided guards or default to ['web']
      await ctx.auth.authenticateUsing(options.guards ?? ['web'], { loginRoute: this.redirectTo })
      await next()
    } catch {
      // Redirect if authentication fails
      return ctx.response.redirect(this.redirectTo)
    }
  }
}
