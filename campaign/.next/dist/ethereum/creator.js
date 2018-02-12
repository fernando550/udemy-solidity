'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _kickstarterCreator = require('./build/kickstarterCreator.json');

var _kickstarterCreator2 = _interopRequireDefault(_kickstarterCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contract = new _web2.default.eth.Contract(JSON.parse(_kickstarterCreator2.default.interface), '0xF729A84e7C8056Feb15cbF0BDB19C72a4675bAB1');

exports.default = contract;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjcmVhdG9yLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJraWNrc3RhcnRlckNyZWF0b3IiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBK0IsQUFBL0I7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyw2QkFBbUIsQUFBOUIsQUFEZSxZQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJjcmVhdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2ZuYXJib25hLy5hdG9tL3Byb2plY3RzL3VkZW15LXNvbGlkaXR5L2NhbXBhaWduIn0=