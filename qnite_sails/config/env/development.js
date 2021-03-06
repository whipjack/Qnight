/**
 * Development environment settings
 * (sails.config.*)
 *
 * This is mostly a carbon copy of the production environment settings
 * in config/env/production.js, but with the overrides listed below.
 * For more detailed information and links about what these settings do
 * see the production config file.
 *
 * > This file takes effect when `sails.config.environment` is "development".
 * > But note that NODE_ENV should still be "production" when lifting
 * > your app in the development environment.  In other words:
 * > ```
 * >     NODE_ENV=production sails_environment=development node app
 * > ```
 *
 * If you're unsure or want advice, stop by:
 * https://sailsjs.com/support
 */

var PRODUCTION_CONFIG = require('./production');
//--------------------------------------------------------------------------
// /\  Start with your production config, even if it's just a guess for now,
// ||  then configure your development environment afterwards.
//     (That way, all you need to do in this file is set overrides.)
//--------------------------------------------------------------------------

module.exports = Object.assign({}, PRODUCTION_CONFIG, {

  datastores: Object.assign({}, PRODUCTION_CONFIG.datastores, {
    default: Object.assign({}, PRODUCTION_CONFIG.datastores.default, {
      // url: 'mysql://shared:some_password_everyone_knows@db.example.com:3306/my_development_db',
      //--------------------------------------------------------------------------
      // /\  Hard-code your development db `url`.
      // ||  (or use system env var: `sails_datastores__default__url`)
      //--------------------------------------------------------------------------
    })
  }),

  sockets: Object.assign({}, PRODUCTION_CONFIG.sockets, {

    onlyAllowOrigins: [
      'http://localhost:1337',
      // 'https://example-development.herokuapp.com',
      // 'http://example-development.herokuapp.com',
      // 'https://development.example.com',
      // 'http://development.example.com',
    ],
    //--------------------------------------------------------------------------
    // /\  Hard-code a development-only override for allowed origins.
    // ||  (or set this array via JSON-encoded system env var)
    //     ```
    //     sails_sockets__onlyAllowOrigins='["http://localhost:1337", "…"]'
    //     ```
    //--------------------------------------------------------------------------

    // url: 'redis://shared:some_password_everyone_knows@bigsquid.redistogo.com:9562/',
    //--------------------------------------------------------------------------
    // /\  Hard-code your development Redis server's `url`.
    // ||  (or use system env var: `sails_sockets__url`)
    //--------------------------------------------------------------------------
  }),

  session: Object.assign({}, PRODUCTION_CONFIG.session, {
    // url: 'redis://shared:some_password_everyone_knows@bigsquid.redistogo.com:9562/development-sessions',
    //--------------------------------------------------------------------------
    // /\  Hard-code your development Redis server's `url` again here.
    // ||  (or use system env var: `sails_session__url`)
    //--------------------------------------------------------------------------
  }),

  custom: Object.assign({}, PRODUCTION_CONFIG.custom, {

    baseUrl: 'https://development.example.com',
    //--------------------------------------------------------------------------
    // /\  Hard-code the base URL where your development environment is hosted.
    // ||  (or use system env var: `sails_custom__baseUrl`)
    //--------------------------------------------------------------------------

    internalEmailAddress: 'support+development@example.com',
    //--------------------------------------------------------------------------
    // /\  Hard-code the email address that should receive support/contact form
    // ||  messages in development (or use `sails_custom__internalEmailAddress`)
    //--------------------------------------------------------------------------

    // mailgunSecret: 'key-sandbox_fake_bd32301385130a0bafe030c',
    // stripeSecret: 'sk_sandbox__fake_Nfgh82401348jaDa3lkZ0d9Hm',
    // stripePublishableKey: 'pk_sandbox__fake_fKd3mZJs1mlYrzWt7JQtkcRb',
    //--------------------------------------------------------------------------
    // /\  Hard-code credentials to use in development for other 3rd party APIs, etc.
    // ||  (or use system environment variables prefixed with "sails_custom__")
    //--------------------------------------------------------------------------

  })

});
