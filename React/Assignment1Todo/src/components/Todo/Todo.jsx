import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [], // Load todos from localStorage or initialize as empty
                                                              // if refresh the page the data cant lose.
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

    if (todo.newTodo.trim() && todo.todoDescribe.trim()) {
      const updatedTodos = [...todos, todo];
      this.setState({
        todos: updatedTodos,
        todo: { newTodo: "", todoDescribe: "" },
      });

      // Save updated todos to localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      console.log('todos:', updatedTodos);
      
    }
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_todo, todoIndex) => todoIndex !== index);

    this.setState({
      todos: updatedTodos,
    });

    // Update localStorage after deletion
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  render() {
    let { todos, todo } = this.state;
    const localTodos = localStorage.getItem("todos");
    if (localTodos) todos = JSON.parse(localTodos);

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
