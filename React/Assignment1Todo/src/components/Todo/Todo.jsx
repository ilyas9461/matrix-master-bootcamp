import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // Array to hold todo items
      todo: {
        newTodo: "", // Input value for a new todo
        todoDescribe: "",
      },
    };
  }

  handleInputChange = (event) => {
    const { todos, todo } = this.state;
    this.setState({
      todo: {
        newTodo: event.target.value,
        todoDescribe: todo.todoDescribe,
      },
    });
  };

  handleDescribeChange = (event) => {
    const { todos, todo } = this.state;
    this.setState({
      todo: {
        newTodo: todo.newTodo,
        todoDescribe: event.target.value,
      },
    });
  };

  addTodo = () => {
    const { todos, todo } = this.state;

    this.setState({
      todos: [...todos, todo],
      todo: { newTodo: "", todoDescribe: "" },
    });

    console.log(todos);
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo, todoIndex) => todoIndex !== index),
    });
  };

  render() {
    const { todos, todo } = this.state;

    return (
      <div className="card">
        <div className="add-todo">
          <h1>New Task :</h1>
          <input type="text" value={todo.newTodo} onChange={this.handleInputChange} placeholder="Your task ..." required />
          <textarea value={todo.todoDescribe} name="describe" id="describe" onChange={this.handleDescribeChange} placeholder="Describe it ..." required></textarea>

          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todoObj, index) => (
            <li key={index}>
              {index + 1 + "- " + todoObj.newTodo + " : " + todoObj.todoDescribe}
              <button onClick={() => this.deleteTodo(index)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
