import type { Authenticators } from '@adonisjs/auth/types'
import type { HttpContext } from '@adonisjs/core/http'

export default class GuestMiddleware {
  public redirectTo = '/'

  public async handle(
    ctx: HttpContext,
    next: () => Promise<void>,
    options: { guards?: (keyof Authenticators)[] } = {}
  ) {
    for (const guard of options.guards ?? [ctx.auth.defaultGuard]) {
      if (await ctx.auth.use(guard).check()) {
        return ctx.response.redirect(this.redirectTo, true)
      }
    }

    await next()
  }
}
