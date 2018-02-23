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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _kickstarter = require('../../ethereum/kickstarter');

var _kickstarter2 = _interopRequireDefault(_kickstarter);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\fnarbona\\.atom\\projects\\udemy-solidity\\campaign\\pages\\kickstarters\\show.js?entry';


var ShowKickstarterPage = function (_Component) {
  (0, _inherits3.default)(ShowKickstarterPage, _Component);

  function ShowKickstarterPage() {
    (0, _classCallCheck3.default)(this, ShowKickstarterPage);

    return (0, _possibleConstructorReturn3.default)(this, (ShowKickstarterPage.__proto__ || (0, _getPrototypeOf2.default)(ShowKickstarterPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowKickstarterPage, [{
    key: 'renderKickstarter',
    value: function renderKickstarter() {
      var items = [{
        header: this.props.projectOwner,
        meta: 'Address of Project Owner',
        description: 'Administrator and creator of the kickstarter',
        style: { overflowWrap: 'break-word' }
      }, {
        header: this.props.minimumContribution,
        meta: 'Minimum Contribution (Wei)',
        description: 'Minimum donation amount that is accepted'
      }, {
        header: _web2.default.utils.fromWei(this.props.balance, 'ether'),
        meta: 'Amount Raised (ether)',
        description: 'Current amount raised for the kickstarter campaign'
      }, {
        header: this.props.approversCount,
        meta: 'Number of Donators',
        description: 'Number of contributors on this project'
      }, {
        header: this.props.requestsCount,
        meta: 'Number of Requests',
        description: 'Current requests open under this project'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'show page'), _react2.default.createElement(_contributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), this.renderKickstarter());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var kickstarter, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                kickstarter = (0, _kickstarter2.default)(props.query.address);
                _context.next = 3;
                return kickstarter.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  projectOwner: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShowKickstarterPage;
}(_react.Component);

exports.default = ShowKickstarterPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxraWNrc3RhcnRlcnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJLaWNrc3RhcnRlciIsIkNhcmQiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJTaG93S2lja3N0YXJ0ZXJQYWdlIiwiaXRlbXMiLCJoZWFkZXIiLCJwcm9wcyIsInByb2plY3RPd25lciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsImJhbGFuY2UiLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzQ291bnQiLCJyZW5kZXJLaWNrc3RhcnRlciIsImtpY2tzdGFydGVyIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7Ozs7d0NBY2dCLEFBQ2xCO1VBQU07Z0JBRU0sS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBQyxjQUxFLEFBQ1osQUFJUyxBQUFlO0FBSnhCLEFBQ0UsT0FGVTtnQkFTRixLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFYVSxBQVFaLEFBR2U7QUFIZixBQUNFO2dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FEeEMsQUFDVSxBQUF1QyxBQUMvQztjQUZGLEFBRVEsQUFDTjtxQkFqQlUsQUFjWixBQUdlO0FBSGYsQUFDRTtnQkFNUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkF2QlUsQUFvQlosQUFHZTtBQUhmLEFBQ0U7Z0JBTVEsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7Y0FGRixBQUVRLEFBQ047cUJBN0JKLEFBQWMsQUEwQlosQUFHZSxBQUlqQjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4QkFBQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFIRixBQUdFLEFBQ0M7QUFERDtBQUFBLGVBSkosQUFDRSxBQUlHLEFBQUssQUFHWDs7Ozs7MkcsQUEzRDRCOzs7OzttQkFDckI7QSw4QkFBYywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQSxBQUF3Qjs7dUJBQ3RCLFlBQUEsQUFBWSxRQUFaLEFBQW9CLGFBQXBCLEFBQWlDLEE7O21CQUFqRDtBOzt1Q0FHaUIsUUFEaEIsQUFDZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUZKLEFBRUksQUFBUSxBQUNqQjtpQ0FBZSxRQUhWLEFBR1UsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFKWCxBQUlXLEFBQVEsQUFDeEI7Z0NBQWMsUUFBQSxBQUFRLEEsQUFMakI7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTjRCLEEsQUErRGxDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZm5hcmJvbmEvLmF0b20vcHJvamVjdHMvdWRlbXktc29saWRpdHkvY2FtcGFpZ24ifQ==