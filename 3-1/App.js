import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
// import './javascript.js';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <h1 id="title">{this.props.title}</h1>
                <form class="create">
                    <input type="text" id="text-todo" placeholder="Title..."/>
                    <button type="button" id="add">Add</button>
                </form>
            </div>
        );
    }
}

class Li extends Component {
    render() {
        return (
            <li className={this.props.class}>{this.props.text}<span class="close">×</span></li>
        );
    }
}

class ListUl extends Component {
    render() {
        return (
            <ul id="list">
                <Li class='completed' text="Quang"/>
            </ul>
        );
    }
}

class MainContent extends Component {
    render() {
        return (
            <div class="main">
                <ListUl/>
            </div>
        );
    }
}

class Container extends Component {
    render() {
        return (
            <div class="container">
                <Header title="Code Camp's Todo List"/>
                <MainContent/>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Container/>
        );
    }
}

export default App;