'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Kickstarter = require('./build/Kickstarter.json');

var _Kickstarter2 = _interopRequireDefault(_Kickstarter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Kickstarter2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxraWNrc3RhcnRlci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwia2lja3N0YXJ0ZXIiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4QixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyxzQkFBWSxBQUF2QixBQURLLFlBRUwsQUFGSyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJraWNrc3RhcnRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9mbmFyYm9uYS8uYXRvbS9wcm9qZWN0cy91ZGVteS1zb2xpZGl0eS9jYW1wYWlnbiJ9