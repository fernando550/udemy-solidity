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

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\fnarbona\\.atom\\projects\\udemy-solidity\\campaign\\pages\\index.js?entry';


var Creator = function (_Component) {
  (0, _inherits3.default)(Creator, _Component);

  function Creator() {
    (0, _classCallCheck3.default)(this, Creator);

    return (0, _possibleConstructorReturn3.default)(this, (Creator.__proto__ || (0, _getPrototypeOf2.default)(Creator)).apply(this, arguments));
  }

  (0, _createClass3.default)(Creator, [{
    key: 'renderKickstarters',
    value: function renderKickstarters() {
      var items = this.props.kickstarters.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }, 'View'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.kickstarters;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'All Campaigns'), _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Create Kickstarter',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.renderKickstarters()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0b3IiLCJMYXlvdXQiLCJDYXJkIiwiQnV0dG9uIiwiQ3JlYXRvciIsIml0ZW1zIiwicHJvcHMiLCJraWNrc3RhcnRlcnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlcktpY2tzdGFydGVycyIsIm1ldGhvZHMiLCJ2aWV3QWxsS2lja3N0YXJ0ZXJzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTTs7Ozs7OztJLEFBRVQ7Ozs7Ozs7Ozs7O3lDQU1pQixBQUNuQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLG1CQUFXLEFBQ25EOztrQkFBTyxBQUNHLEFBQ1I7dUNBQWEsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLFdBQUEsRUFGUixBQUVRLEFBQ2I7aUJBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBRkosQUFBYyxBQVFkLE9BUmM7OzJDQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDtVQUFNLFFBQVEsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBRXpCOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtjQUZGLEFBRU8sQUFDTDtpQkFIRjs7b0JBQUE7c0JBRkYsQUFFRSxBQUtBO0FBTEE7QUFDRTs7b0JBSUY7c0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQVRKLEFBQ0UsQUFRRSxBQUFNLEFBQUssQUFHaEI7Ozs7Ozs7Ozs7Ozt1QkEvQjRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQkFBaEIsQUFBc0MsQTs7bUJBQTNEO0E7aURBQ0MsRUFBQyxjQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIVyxBLEFBb0N0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9mbmFyYm9uYS8uYXRvbS9wcm9qZWN0cy91ZGVteS1zb2xpZGl0eS9jYW1wYWlnbiJ9