const routes = require('next-routes')();
routes
  .add('/kickstarters/new', 'kickstarters/new')
  .add('/kickstarters/:address', 'kickstarters/show')
module.exports = routes;
