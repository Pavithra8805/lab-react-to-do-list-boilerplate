import { Component } from "react";


class Todo extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            todos: [],
        };
    }

    handleChange = (event) => {
        let userInput = event.target.value;
        this.setState({ inputText: userInput });
    };

    handleClick = () => {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, this.state.inputText],
            inputText: "",
        })
    };

    handleUpdates = (index) => {
        let updateInput = prompt("Update todo..!!");

        let filterTodos = this.state.todos.map((el, i) => {
            if (i == index) {
                return updateInput;
            }
            return el;
        })

        this.setState({ ...this.state,todos: filterTodos });
    }

    handleDelete=(index) => {
        let todos = this.state.todos;
        todos.splice(index,1);
        this.setState({ ...this.state,todos});
    }
    handleConsole =()=> {
        console.log(this.state);
    }


    render() {
        return (
            <>
                <div>
                    <h1>Todo Application</h1>
                </div>
                <div className="main-container">
                    <input
                        type="text"
                        placeholder="What's on your mind ?"
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                    <button onClick={this.handleClick}>
                        Add Todo
                    </button>
                    <button onClick={this.handleConsole}>
                        Console
                    </button>
                    

                    {this.state.todos.map((el, i) => {
                        return (
                            <div key={i}>
                                <p>{el}</p>
                                <button onClick={() => this.handleUpdates(i)}>
                                    Update
                                </button>
                                <button onClick={() => this.handleDelete(i)}>
                                    Delete
                                </button>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Todo;



