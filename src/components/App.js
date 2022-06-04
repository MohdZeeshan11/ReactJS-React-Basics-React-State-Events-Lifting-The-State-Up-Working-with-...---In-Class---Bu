import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state ={value:''};
	};

	
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id='click' onClick={this.addText = ()=>{
	        	this.setState({value:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"});
	            }}>Click me !</button>
				{this.state.value !== '' ? <p id='para'>{this.state.value}</p> : null}
    		</div>
    	);
    }
}


export default App;

