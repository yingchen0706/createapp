import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world</h1>;

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function App() {
    return (
        <div>test11==
            <Clock />
            <ActionLink />
            <Toggle />
            <LoginControl />
        </div>
    );
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me22233
        </a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render () {
        return (
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        );
    }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick = {this.handleLoginClick} />
        }

        return (
            <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            {button}
            </div>
        )
    }
}


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favoriate flavor is ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                Pick your favorite La Croix flavor:
                <select value={this.state.value} onChange = {this.handleChange}>
                <option value="grapefruit">Grapfruit</option>
                <option value="lime">lime</option>
                <option value="coconut">coconut</option>
                <option value="mango">mango</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
            <legend> Enter temperature in {scaleNames[scale]}: </legend>
            <input value={value} onChange = {this.handleChange} />
            </fieldset>
        );
    }
}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange(value) {
        var obj ={scale: 'c', value};
        console.log(obj);
        this.setState(obj);
    }
    handleFahrenheitChange(value) {
        var obj ={scale: 'f', value};
        console.log(obj); 
        this.setState({scale: 'f', value});
    }
    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f'? tryConvert(value, toCelsius):value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit):value;

        return (
            <div>
                <TemperatureInput
                scale='c'
                value={celsius}
                onChange={this.handleCelsiusChange} />
                <TemperatureInput
                scale='f'
                value={fahrenheit}
                onChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);


