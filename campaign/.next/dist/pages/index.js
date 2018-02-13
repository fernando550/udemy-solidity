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

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

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

    // renderKickstarters() {
    //   const items = this.props.kickstarters
    // }

    value: function render() {
      var items = this.props.kickstarters;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, ' this is the body '), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, items));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0b3IiLCJMYXlvdXQiLCJDcmVhdG9yIiwiaXRlbXMiLCJwcm9wcyIsImtpY2tzdGFydGVycyIsIm1ldGhvZHMiLCJ2aWV3QWxsS2lja3N0YXJ0ZXJzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7O1NBTUo7O0FBQ0E7QUFDQTs7OzZCQUVTLEFBQ1A7VUFBTSxRQUFRLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUV6Qjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsU0FISixBQUNFLEFBRUUsQUFHTDs7Ozs7Ozs7Ozs7O3VCQWpCNEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQUFoQixBQUFzQyxBOzttQkFBM0Q7QTtpREFDQyxFQUFDLGNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhXLEEsQUFzQnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2ZuYXJib25hLy5hdG9tL3Byb2plY3RzL3VkZW15LXNvbGlkaXR5L2NhbXBhaWduIn0=