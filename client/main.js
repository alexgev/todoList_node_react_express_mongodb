import React from 'react';
import ReactDOM from 'react-dom';



function Warning(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div>
			Warning Message!
        </div>
	)
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { warn: false };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => {
			return { warn: !prevState.warn };
		});
	}

	render() {
		return (
			<div>
				<Warning warn={this.state.warn} />
				<button onClick={this.handleToggleClick}>
					{this.state.warn ? 'Hide' : 'Show'}
				</button>
			</div>
		)
	}
}

ReactDOM.render(
	<Page />,
	document.getElementById("app")
)







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

