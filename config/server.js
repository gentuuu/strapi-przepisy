// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

const cors = require('cors');

module.exports = ({ env }) => ({

  server: {
    middlewares: [

      cors({
        origin: ['http://localhost:3000', 'https://twoj-adres-url.herokuapp.com'], // Dodaj adresy URL, z których chcesz zezwolić na dostęp do zasobów
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      }),

    ],
  },

});


