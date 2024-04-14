module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  cors: {
    enabled: true,
    origin: ['http://localhost:5173/', 'http://gentuuu4.online/'], // replace with your frontend's origin
  },
});

