'use strict';

var routes = require('next-routes')();
routes.add('/kickstarters/new', 'kickstarters/new').add('/kickstarters/:address', 'kickstarters/show').add('/kickstarters/:address/requests', '/kickstarters/requests/index').add('/kickstarters/:address/requests/new', 'kickstarters/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBLE9BQ0csQUFESCxJQUNPLEFBRFAscUJBQzRCLEFBRDVCLG9CQUVHLEFBRkgsSUFFTyxBQUZQLDBCQUVpQyxBQUZqQyxxQkFHRyxBQUhILElBR08sQUFIUCxtQ0FHMEMsQUFIMUMsZ0NBSUcsQUFKSCxJQUlPLEFBSlAsdUNBSThDLEFBSjlDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZm5hcmJvbmEvLmF0b20vcHJvamVjdHMvdWRlbXktc29saWRpdHkvY2FtcGFpZ24ifQ==