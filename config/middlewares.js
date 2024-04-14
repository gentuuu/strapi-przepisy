// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];


module.exports = {
  load: {
    before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [],
    after: ['parser', 'router'],
  },
  settings: {
    timer: {
      enabled: true,
    },
    cors: {
      enabled: true,
      origin: ['http://localhost:5173/', 'http://gentuuu4.online/'],
    },
  },
};