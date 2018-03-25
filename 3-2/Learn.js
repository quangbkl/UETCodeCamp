import React, {Component} from 'react';
import './App.css';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <h1 id="title">{this.props.title}</h1>
                <form class="create">
                    <input type="text" id="text-todo" placeholder="Title..." onChange={this.props.onClick.onChange}/>
                    <button type="button" id="add" onClick={this.props.onClick.addText}>Add</button>
                </form>
            </div>
        );
    }
}

class ListUl extends Component {
    render() {
        const list = this.props.list;
        var i = 0;
        const listIteam = list.map(item =>
            <li className={(item.completed ? 'completed' : '')} data-id={i++} onClick={this.props.onClick.onCheck}>
                {item.text}<span class="close" onClick={this.props.onClick.deleteTodo}>×</span>
            </li>
        )
        return (
            <ul>
                {listIteam}
            </ul>
        );
    }
}

class MainContent extends Component {
    render() {
        return (
            <div class="main">
                <ListUl list={this.props.list} onClick={this.props.onClick}/>
            </div>
        );
    }
}

class Container extends Component {
    render() {
        return (
            <div class="container">
                <Header title="Code Camp's Todo List" onClick={this.props.onClick}/>
                <MainContent list={this.props.list} onClick={this.props.onClick}/>
            </div>
        );
    }
}

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    text: 'Quang',
                    completed: true
                },
                {
                    text: 'Hai',
                    completed: false
                }
            ],
            inputText: ''
        };
        this.addText = this.addText.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    addText() {
        var arrayList = this.state.list
        arrayList.push({
            text: this.state.inputText,
            completed: false
        })
        this.setState({
            list: arrayList
        });
    }

    onChange(e) {
        const text = e.target.value;
        this.setState({
            inputText: text
        });
    }

    deleteTodo(event) {
        const id = event.target.parentElement.dataset.id
        var arrayList = this.state.list
        arrayList.splice(id, 1)
        this.setState({
            list: arrayList
        });
    }

    onCheck(event) {
        if (event.target.tagName == 'LI') {
            const id = event.target.dataset.id
            var arrayList = this.state.list
            arrayList[id].completed = !(arrayList[id].completed)
            this.setState({
                list: arrayList
            });
        }
    }

    render() {
        const onClick = {
            addText: this.addText,
            onChange: this.onChange,
            deleteTodo: this.deleteTodo,
            onCheck: this.onCheck
        }
        return (
            <Container list={this.state.list} onClick={onClick}/>
        );
    }
}

export default Learn;