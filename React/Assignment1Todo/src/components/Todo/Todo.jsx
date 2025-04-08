import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // Array to hold todo items
      newTodo: "", // Input value for a new todo
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim()) {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: "",
      });
    }
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo, todoIndex) => todoIndex !== index),
    });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div className="card">
        <h1>New Task :</h1>
        <input type="text" value={newTodo} onChange={this.handleInputChange} placeholder="Your task ..." />
        <textarea name="describe" id="describe" placeholder="Describe it ..."></textarea>
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} 
              <button onClick={() => this.deleteTodo(index)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
