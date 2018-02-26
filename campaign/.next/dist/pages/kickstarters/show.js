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

var _routes = require('../../routes');

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
          lineNumber: 58
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'show page'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.renderKickstarter()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_routes.Link, { route: '/kickstarters/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'View Requests')))))));
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
                  address: props.query.address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxraWNrc3RhcnRlcnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJLaWNrc3RhcnRlciIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIlNob3dLaWNrc3RhcnRlclBhZ2UiLCJpdGVtcyIsImhlYWRlciIsInByb3BzIiwicHJvamVjdE93bmVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwiYmFsYW5jZSIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdHNDb3VudCIsInJlbmRlcktpY2tzdGFydGVyIiwiYWRkcmVzcyIsImtpY2tzdGFydGVyIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozt3Q0FlZ0IsQUFDbEI7VUFBTTtnQkFFTSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFDLGNBTEUsQUFDWixBQUlTLEFBQWU7QUFKeEIsQUFDRSxPQUZVO2dCQVNGLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ25CO2NBRkYsQUFFUSxBQUNOO3FCQVhVLEFBUVosQUFHZTtBQUhmLEFBQ0U7Z0JBTVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUR4QyxBQUNVLEFBQXVDLEFBQy9DO2NBRkYsQUFFUSxBQUNOO3FCQWpCVSxBQWNaLEFBR2U7QUFIZixBQUNFO2dCQU1RLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ25CO2NBRkYsQUFFUSxBQUNOO3FCQXZCVSxBQW9CWixBQUdlO0FBSGYsQUFDRTtnQkFNUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkE3QkosQUFBYyxBQTBCWixBQUdlLEFBSWpCO0FBUEUsQUFDRTs7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBREYsQUFDRSxBQUNHLEFBQUssQUFFUixzQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBTk4sQUFDRSxBQUlFLEFBQ0UsQUFHSjtBQUhJOzRCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLDBCQUF3QixLQUFBLEFBQUssTUFBN0IsQUFBbUMsVUFBekM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBaEJkLEFBQ0UsQUFFRSxBQVNFLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRZjs7Ozs7MkcsQUE1RTRCOzs7OzttQkFDckI7QSw4QkFBYywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQUFBd0IsQTs7dUJBQ3RCLFlBQUEsQUFBWSxRQUFaLEFBQW9CLGEsQUFBcEIsQUFBaUM7O21CQUFqRDtBOzsyQkFHSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjt1Q0FBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjtpQ0FBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMWCxBQUtXLEFBQVEsQUFDeEI7Z0NBQWMsUUFOVCxBQU1TLEFBQVEsQTtBQU5qQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTjRCLEEsQUFnRmxDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZm5hcmJvbmEvLmF0b20vcHJvamVjdHMvdWRlbXktc29saWRpdHkvY2FtcGFpZ24ifQ==