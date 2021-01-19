const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware;

module.exports = app => {
  app.use(
    proxy('/api/v1/rentals', {
      target: 'http://localhost:3001/'
    })
  );
};
