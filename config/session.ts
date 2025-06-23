import env from '#start/env'
import { defineConfig, stores } from '@adonisjs/session'

const sessionConfig = defineConfig({
  enabled: true,
  cookieName: 'adonis-session',

  /**
   * When set to true, the session id cookie will be deleted
   * once the user closes the browser.
   */
  clearWithBrowser: false,

  /**
   * How long to keep the session data alive without
   * any activity.
   */
  age: '2h',

  /**
   * Session cookie configuration
   */
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,   // false for localhost dev, set true for production HTTPS
    sameSite: 'lax', // You can try 'strict' or false if issues persist
  },

  /**
   * The store to use. Change to 'file' to test file-based sessions.
   */
  store: env.get('SESSION_DRIVER', 'cookie'),

  /**
   * Available session stores
   */
  stores: {
    cookie: stores.cookie(),
    // Uncomment below to test file-based sessions:
    // file: stores.file({ location: 'sessions' }),
    // Uncomment below to test Redis sessions (ensure Redis is setup):
    // redis: stores.redis({ connection: 'local' }),
  },
})

export default sessionConfig
