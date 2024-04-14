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

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = ({ env }) => ({

  server: {
 
    middlewares: [

      'strapi::errors',
      'strapi::security',
      (config, { strapi }) => {
        const cors = require('cors')({
          origin: [
            'http://localhost:3000', // Dodaj adres URL twojej aplikacji React
            // 'https://twoja-domena.com', // Dodaj adres URL twojej aplikacji React, jeśli jest wdrożona
          ],
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
          allowedHeaders: [
            'Content-Type',
            'Authorization',
            'X-Requested-With',
            'Accept',
            'Origin',
            'Cache-Control',
            'X-Content-Type-Options',
          ],
          credentials: true,
        });

        return [

          createProxyMiddleware('/graphql', {
            target: 'http://localhost:1337/graphql',
            changeOrigin: true,
            pathRewrite: { '^/graphql': '' },
            onProxyRes(proxyRes) {
              proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            },
          }),
          cors,
        ];
      },
   
    ],
  },

});

