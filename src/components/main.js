import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: toDoData
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  //map filter reduce find

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const items = this.props.items || [];
    return (
      <main>
        <div className="todo-list">
          {items.map(item => (
            <ToDoItem
              key={item.id}
              item={item}
              handleChange={() => {
                this.handleChange();
              }}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
