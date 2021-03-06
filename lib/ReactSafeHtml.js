'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var parse = require('./parse');
var toReactElements = require('./toReactElements.js');
var components = require('./components');
var PropTypes = require('prop-types');

var ReactSafeHtml = function (_React$Component) {
  _inherits(ReactSafeHtml, _React$Component);

  function ReactSafeHtml() {
    _classCallCheck(this, ReactSafeHtml);

    return _possibleConstructorReturn(this, (ReactSafeHtml.__proto__ || Object.getPrototypeOf(ReactSafeHtml)).apply(this, arguments));
  }

  _createClass(ReactSafeHtml, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.html !== this.props.html;
    }
  }, {
    key: 'render',
    value: function render() {
      var parsed = parse(this.props.html + ' ');
      var tree = toReactElements(parsed, this.props.components);
      return tree;
    }
  }]);

  return ReactSafeHtml;
}(React.Component);

ReactSafeHtml.propTypes = {
  html: PropTypes.string,
  components: PropTypes.object // e.g. {div: Component}
};
ReactSafeHtml.defaultProps = {
  components: components.makeElements(components.standardAllowedProps)
};
;

ReactSafeHtml.components = components;

module.exports = ReactSafeHtml;