import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import About from './About';
import Track from './Track';

import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/tracks/:id" component={Track} />
		</Router>
	</Provider >,
	document.getElementById('app')
)


















// import { createStore } from 'redux';


// function playlist(state = [], action) {
// 	if (action.type === "ADD_TRACK") {
// 		return [
// 			...state,
// 			action.payload
// 		]
// 	}
// 	return state;
// }


// const store = createStore(playlist);
// const list = document.querySelector('.list');
// const trackInput = document.querySelector('.trackInput');

// store.subscribe(() => {
// 	list.innerHTML = "";
// 	trackInput.value = "";
// 	store.getState().forEach((track) => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	})
// })


// const addTrackBtn = document.querySelector('.addTrack');
// addTrackBtn.addEventListener('click', (e) => {
// 	const trackName = trackInput.value;
// 	store.dispatch({type: 'ADD_TRACK', payload: trackName});
// })

















// import React from 'react';
// import ReactDOM from 'react-dom';


// class ToDoList extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {todos: []};
// 	}

// 	componentWillMount() {
// 		let todos = [];
// 		let saveThis = this;
// 		// 1. Создаём новый объект XMLHttpRequest
// 		var xhr = new XMLHttpRequest();

// 		// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// 		xhr.open('GET', 'http://localhost:8080/tasks');

// 		// 3. Отсылаем запрос
// 		xhr.send();

// 		xhr.onload = function() {
// 			// 4. Если код ответа сервера не 200, то это ошибка
// 			if (this.status != 200) {
// 				// обработать ошибку
// 				console.log(this.status + ': ' + this.statusText); // пример вывода: 404: Not Found
// 			} else {
// 				// вывести результат
// 				todos = JSON.parse(this.responseText);
// 				saveThis.setState({todos: todos});
// 				console.log(JSON.parse(this.responseText)); // responseText -- текст ответа.
// 			}
// 		}


// 	}

// 	render() {
// 		return (
// 			<ul>
// 				{
// 					this.state.todos.map((todo) => {
// 						return (
// 							<div key={todo._id}>
// 								<li>{`${todo.name} : ${todo.value}`}</li>
// 								<hr />
// 							</div>
// 						)
// 					})
// 				}
// 			</ul>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<ToDoList />,
// 	document.getElementById('app')
// )










// const scaleNames = {
// 	c: "Celsius",
// 	f: "Fahrenheit"
// }

// function toCelsius(fahrenheit) {
// 	return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
// 	return (celsius * 9 / 5) + 32;
// }

// function tryConvert(value, convert) {
// 	const input = parseFloat(value);
// 	if (Number.isNaN(input)) {
// 		return '';
// 	}
// 	const output = convert(input);
// 	const rounded = Math.round(output * 1000) / 1000;
// 	return rounded.toString();
// }

// function BoilingVerdict(props) {
// 	return (
// 		<p>
// 			{
// 				+props.celsius >= 100 ? "yes" : "no"
// 			}
// 		</p>
// 	)
// }

// class TemperatureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		this.props.onChange(e.target.value);
// 	}

// 	render() {
// 		const value = this.props.value;
// 		const scale = this.props.scale;
// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in {scaleNames[scale]}:</legend>
// 				<input value={value}
// 					onChange={this.handleChange} />
// 			</fieldset>
// 		);
// 	}
// }

// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// 		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
// 		this.state = { value: '', scale: 'c' };
// 	}

// 	componentDidMount() {
// 		// 1. Создаём новый объект XMLHttpRequest
// 		var xhr = new XMLHttpRequest();

// 		// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// 		xhr.open('GET', 'http://localhost:8080/tasks');

// 		// 3. Отсылаем запрос
// 		xhr.send();

// 		xhr.onload = function() {
// 			// 4. Если код ответа сервера не 200, то это ошибка
// 			if (this.status != 200) {
// 				// обработать ошибку
// 				console.log(this.status + ': ' + this.statusText); // пример вывода: 404: Not Found
// 			} else {
// 				// вывести результат
// 				console.log(JSON.parse(this.responseText)); // responseText -- текст ответа.
// 			}
// 		}

// 	}

// 	handleCelsiusChange(value) {
// 		this.setState({ scale: 'c', value });
// 	}

// 	handleFahrenheitChange(value) {
// 		this.setState({ scale: 'f', value });
// 	}

// 	render() {
// 		const scale = this.state.scale;
// 		const value = this.state.value;
// 		const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
// 		const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

// 		return (
// 			<div>
// 				<TemperatureInput
// 					scale="c"
// 					value={celsius}
// 					onChange={this.handleCelsiusChange} />
// 				<TemperatureInput
// 					scale="f"
// 					value={fahrenheit}
// 					onChange={this.handleFahrenheitChange} />
// 				<BoilingVerdict
// 					celsius={celsius} />
// 			</div>
// 		);
// 	}
// }



// ReactDOM.render(
// 	<Calculator />,
// 	document.getElementById('app')
// )









// function BoilingVerdict(props) {
// 	return (
// 		<p>
// 			{
// 				+props.celsius >= 100 ? "yes" : "no"
// 			}
// 		</p>
// 	)
// } 

// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
// 		this.handleOnChange = this.handleOnChange.bind(this);
// 	}

// 	handleOnChange(e) {
// 		this.setState({value: e.target.value})
// 	}

// 	render() {
// 		const value = this.state.value;
// 		return (
// 			<fieldset>
// 				<legend>Enter tempreture in Celsius:</legend>
// 				<input value={this.state.value} onChange={this.handleOnChange}/>
// 				<BoilingVerdict celsius={value}/>
// 			</fieldset>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Calculator />,
// 	document.getElementById('app')
// )













// class Form extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''}
// 		this.handleOnChange = this.handleOnChange.bind(this);
// 		this.handleOnClick = this.handleOnClick.bind(this);
// 	}

// 	handleOnChange(event) {
// 		this.setState({
// 			value: event.target.value
// 		})
// 	}

// 	handleOnClick(event) {
// 		alert(`Text field value is ${this.state.value}`);
// 	}


// 	render() {
// 		return (
// 			<form>
// 				<input placeholder="Hello!" value={this.state.value} onChange={this.handleOnChange} />
// 				<button onClick={this.handleOnClick}>Submit</button>
// 			</form>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Form />,
// 	document.getElementById('app')
// )















// ReactDOM.render(
// 	<input type="text" value="hello!"/>,
// 	document.getElementById('app')
// )











// function NumberList(props) {
// 	const numbers = props.numbers;
// 	return (
// 		<ul>
// 			{
// 				numbers.map((val) => {
// 					return <li key={val}>{val}</li>
// 				})
// 			}
// 		</ul>
// 	)
// }

// const numbers = [1,2,3,4,5];

// ReactDOM.render(
// 	<NumberList numbers={numbers}/>,
// 	document.getElementById('app')
// )










// function Blog(props) {
// 	const sidebar = props.posts.map((post) => {
// 		return <li key={post.id}>{post.title}</li>
// 	})

// 	const content = props.posts.map((post) => {
// 		return (
// 			<div key={post.id}>
// 				<h3>{post.title}</h3>
// 				<p>{post.content}</p>
// 			</div>
// 		)
// 	})

// 	return (
// 		<div>
// 			<ul>
// 				{sidebar}
// 			</ul>
// 			<hr />
// 			<ul>
// 				{content}
// 			</ul>
// 		</div>
// 	)
// }


// const posts = [
// 	{id: 1, title: "Hello world", content: "Start learning React js"},
// 	{id: 2, title: "Installation", content: "You can install react from npm"}
// ]

// ReactDOM.render(
// 	<Blog posts={posts} />,
// 	document.getElementById('app')
// )











// function ListItem(props) {
// 	const liElem = props.number;
// 	return (<li>{props.number}</li>)
// }

// function NumberList(props) {
// 	const arr = props.numbers;
// 	const li = arr.map((val) => {
// 		return <ListItem number={val} key={val}/>
// 	})
// 	return (
// 		<ul>
// 			{li}
// 		</ul>
// 	)
// }

// const arr = [1,2,3,4,5];

// ReactDOM.render(
// 	<NumberList numbers={arr} />,
// 	document.getElementById('app')
// )









// function ListItems(props) {
// 	const arr = props.number;
// 	const li = arr.map((val) => {
// 		return <li key={val.toString()}>{val}</li>
// 	})
// 	return <ul>{li}</ul>;
// }

// const numbers = [1,2,3,4,5];

// ReactDOM.render(
// 	<ListItems number={numbers}/>,
// 	document.getElementById('app')
// )



// const arr = [1,2,3,4,5];
// const numbersLi = arr.map((number) => {
// 	return <li>{number}</li>
// })

// ReactDOM.render(
// 	<ul>{numbersLi}</ul>,
// 	document.getElementById('app')
// )






// function Warning(props) {
// 	if (!props.warn) {
// 		return null;
// 	}

// 	return (
// 		<div>
// 			Warning Message!
//         </div>
// 	)
// }

// class Page extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { warn: false };
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}

// 	handleToggleClick() {
// 		this.setState(prevState => {
// 			return { warn: !prevState.warn };
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Warning warn={this.state.warn} />
// 				<button onClick={this.handleToggleClick}>
// 					{this.state.warn ? 'Hide' : 'Show'}
// 				</button>
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Page />,
// 	document.getElementById("app")
// )







// function UserGreeting(props) {
//     return <h1>Welcome Back</h1>
// }

// function GuestGreeting(props) {
//     return <h1>Please, sign in</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;

//     if(props.isLoggedIn) {
//         return <UserGreeting />
//     } else {
//         return <GuestGreeting />
//     }
// }

// function LogginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             loggin
//         </button>
//     )
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isLoggedIn: false};
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;

//         let button = null;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick}/>
//         } else {
//             button = <LogginButton onClick={this.handleLoginClick} />
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('app')
// );






// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggledOn: true}

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState((prevState) => {
//             return {isToggledOn: !prevState.isToggledOn}
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>
//                     {this.state.isToggledOn ? 'ON' : 'OFF'}
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('app')
// )





// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => {
//             this.tick();
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({date: new Date()});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }

// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

