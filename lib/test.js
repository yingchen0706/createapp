'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var element = _react2.default.createElement(
    'h1',
    null,
    'Hello, world'
);

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({ date: new Date() });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(_react2.default.Component);

function App() {
    return _react2.default.createElement(
        'div',
        null,
        'test11==',
        _react2.default.createElement(Clock, null),
        _react2.default.createElement(ActionLink, null),
        _react2.default.createElement(Toggle, null),
        _react2.default.createElement(LoginControl, null)
    );
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked');
    }

    return _react2.default.createElement(
        'a',
        { href: '#', onClick: handleClick },
        'Click me22233'
    );
}

var Toggle = function (_React$Component2) {
    _inherits(Toggle, _React$Component2);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this3 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this3.state = { isToggleOn: true };

        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(Toggle, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { onClick: this.handleClick },
                this.state.isToggleOn ? 'On' : 'Off'
            );
        }
    }]);

    return Toggle;
}(_react2.default.Component);

function LoginButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Login'
    );
}

function LogoutButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Logout'
    );
}
function UserGreeting(props) {
    return _react2.default.createElement(
        'h1',
        null,
        'Welcome back!'
    );
}

function GuestGreeting(props) {
    return _react2.default.createElement(
        'h1',
        null,
        'Please sign up.'
    );
}
function Greeting(props) {
    var isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return _react2.default.createElement(UserGreeting, null);
    }
    return _react2.default.createElement(GuestGreeting, null);
}

var LoginControl = function (_React$Component3) {
    _inherits(LoginControl, _React$Component3);

    function LoginControl(props) {
        _classCallCheck(this, LoginControl);

        var _this4 = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

        _this4.handleLoginClick = _this4.handleLoginClick.bind(_this4);
        _this4.handleLogoutClick = _this4.handleLogoutClick.bind(_this4);
        _this4.state = { isLoggedIn: false };
        return _this4;
    }

    _createClass(LoginControl, [{
        key: 'handleLoginClick',
        value: function handleLoginClick() {
            this.setState({ isLoggedIn: true });
        }
    }, {
        key: 'handleLogoutClick',
        value: function handleLogoutClick() {
            this.setState({ isLoggedIn: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var isLoggedIn = this.state.isLoggedIn;

            var button = null;
            if (isLoggedIn) {
                button = _react2.default.createElement(LogoutButton, { onClick: this.handleLogoutClick });
            } else {
                button = _react2.default.createElement(LoginButton, { onClick: this.handleLoginClick });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Greeting, { isLoggedIn: isLoggedIn }),
                button,
                button
            );
        }
    }]);

    return LoginControl;
}(_react2.default.Component);

var FlavorForm = function (_React$Component4) {
    _inherits(FlavorForm, _React$Component4);

    function FlavorForm(props) {
        _classCallCheck(this, FlavorForm);

        var _this5 = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

        _this5.state = { value: 'coconut' };

        _this5.handleChange = _this5.handleChange.bind(_this5);
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);

        return _this5;
    }

    _createClass(FlavorForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Your favoriate flavor is ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'label',
                    null,
                    'Pick your favorite La Croix flavor:',
                    _react2.default.createElement(
                        'select',
                        { value: this.state.value, onChange: this.handleChange },
                        _react2.default.createElement(
                            'option',
                            { value: 'grapefruit' },
                            'Grapfruit'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'lime' },
                            'lime'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'coconut' },
                            'coconut'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'mango' },
                            'mango'
                        )
                    )
                ),
                _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return FlavorForm;
}(_react2.default.Component);

var scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function tryConvert(value, convert) {
    var input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    var output = convert(input);
    var rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

var TemperatureInput = function (_React$Component5) {
    _inherits(TemperatureInput, _React$Component5);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this6 = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this6.handleChange = _this6.handleChange.bind(_this6);
        return _this6;
    }

    _createClass(TemperatureInput, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.props.onChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.props.value;
            var scale = this.props.scale;
            return _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                    'legend',
                    null,
                    ' Enter temperature in ',
                    scaleNames[scale],
                    ': '
                ),
                _react2.default.createElement('input', { value: value, onChange: this.handleChange })
            );
        }
    }]);

    return TemperatureInput;
}(_react2.default.Component);

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return _react2.default.createElement(
            'p',
            null,
            'The water would boil.'
        );
    }
    return _react2.default.createElement(
        'p',
        null,
        'The water would not boil.'
    );
}

var Calculator = function (_React$Component6) {
    _inherits(Calculator, _React$Component6);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this7 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this7.handleCelsiusChange = _this7.handleCelsiusChange.bind(_this7);
        _this7.handleFahrenheitChange = _this7.handleFahrenheitChange.bind(_this7);
        _this7.state = { value: '', scale: 'c' };
        return _this7;
    }

    _createClass(Calculator, [{
        key: 'handleCelsiusChange',
        value: function handleCelsiusChange(value) {
            var obj = { scale: 'c', value: value };
            console.log(obj);
            this.setState(obj);
        }
    }, {
        key: 'handleFahrenheitChange',
        value: function handleFahrenheitChange(value) {
            var obj = { scale: 'f', value: value };
            console.log(obj);
            this.setState({ scale: 'f', value: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var scale = this.state.scale;
            var value = this.state.value;
            var celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
            var fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(TemperatureInput, {
                    scale: 'c',
                    value: celsius,
                    onChange: this.handleCelsiusChange }),
                _react2.default.createElement(TemperatureInput, {
                    scale: 'f',
                    value: fahrenheit,
                    onChange: this.handleFahrenheitChange }),
                _react2.default.createElement(BoilingVerdict, {
                    celsius: parseFloat(celsius) })
            );
        }
    }]);

    return Calculator;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Calculator, null), document.getElementById('root'));