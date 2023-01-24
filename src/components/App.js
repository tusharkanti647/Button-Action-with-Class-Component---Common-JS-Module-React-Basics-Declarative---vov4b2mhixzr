import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: false,
		};
	};





	handelClick = () => {
		this.setState({ flag: !this.state.flag });
	}


	render() {
		return (
			<div id="main">
				<button id="click" onClick={this.handelClick}  >click</button>
				{/* {this.state.flag ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : ""} */}

				{ /* Do not remove this main div!! */}
			</div>
		);
	}
}


export default App;

