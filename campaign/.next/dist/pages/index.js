'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _creator = require('../ethereum/creator');

var _creator2 = _interopRequireDefault(_creator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\fnarbona\\.atom\\projects\\udemy-solidity\\campaign\\pages\\index.js?entry';


var Creator = function (_Component) {
  (0, _inherits3.default)(Creator, _Component);

  function Creator() {
    (0, _classCallCheck3.default)(this, Creator);

    return (0, _possibleConstructorReturn3.default)(this, (Creator.__proto__ || (0, _getPrototypeOf2.default)(Creator)).apply(this, arguments));
  }

  (0, _createClass3.default)(Creator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.kickstarters[0]);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var kickstarters;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _creator2.default.methods.viewAllKickstarters().call();

              case 2:
                kickstarters = _context.sent;
                return _context.abrupt('return', { kickstarters: kickstarters });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Creator;
}(_react.Component);

exports.default = Creator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0b3IiLCJDcmVhdG9yIiwicHJvcHMiLCJraWNrc3RhcnRlcnMiLCJtZXRob2RzIiwidmlld0FsbEtpY2tzdGFydGVycyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7Ozs7Ozs7SUFFZCxBOzs7Ozs7Ozs7Ozs2QkFNSyxBQUNQOzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLE9BQUEsT0FBTSxBQUFLLE1BQUwsQUFBVyxhQUF4QixBQUFPLEFBQU0sQUFBd0IsQUFDdEM7Ozs7Ozs7Ozs7Ozt1QkFONEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQUFoQixBQUFzQyxBOzttQkFBM0Q7QTtpREFDQyxFQUFDLGNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhXLEEsQUFXdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZm5hcmJvbmEvLmF0b20vcHJvamVjdHMvdWRlbXktc29saWRpdHkvY2FtcGFpZ24ifQ==