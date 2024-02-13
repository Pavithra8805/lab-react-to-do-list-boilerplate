import React, { Component } from 'react';

export class Todo extends Component {
    constructor() {
        super()
        this.state = {
            inputText: ' ',
            todos: []
        }
    }
    handleChange = (event) => {
        let userInput = event.target.value;
        this.setState({ inputText: userInput });
    }
    handleClick = () => {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, this.state.inputText],
            inputText: ' ',
        });
    }
    handleUpdate = (index) => {
        let updateInput = prompt("Update todo");
        let filterTodos = this.state.todos.map((el, i) => {
            if (i == index) {
                return updateInput;
            }
            return el;
        });
        this.setState({ ...this.state, todos: filterTodos });
    }
    handleDelete = (index) => {
        let todos = this.state.todos
        todos.splice(index, 1)
        this.setState({ ...this.setState, todos })

    }

    handleClick = () => {
        const trimmedText = this.state.inputText.trim();
        if (trimmedText !== '') {
            this.setState({
                todos: [...this.state.todos, trimmedText],
                inputText: ''
            });
        } else {
            alert('Please enter a non-empty todo.');
        }
    }

    render() {
        return (
            <div>
                <h1>Todo Application</h1>
                <div className='main-container'>
                    <input type="text" placeholder="Whats on your mind?" onChange={this.handleChange} value={this.state.inputText} />
                    <button onClick={this.handleClick}>Add Todo</button>
                    {
                        this.state.todos.map((el, i) => {
                            return (
                                <div key={i}>
                                    <p>{el}</p>
                                    <button onClick={() => this.handleUpdate(i)}>Update</button>
                                    <button onClick={() => this.handleDelete(i)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Todo;