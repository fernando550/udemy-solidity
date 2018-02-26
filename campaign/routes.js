const routes = require('next-routes')();
routes
  .add('/kickstarters/new', 'kickstarters/new')
  .add('/kickstarters/:address', 'kickstarters/show')
  .add('/kickstarters/:address/requests', '/kickstarters/requests/index')
  .add('/kickstarters/:address/requests/new', 'kickstarters/requests/new');

module.exports = routes;
