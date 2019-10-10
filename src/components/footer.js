import React from "react";
import toDoData from "../toDoData";
// import toDoData from "../toDoData";
// import ToDoItem from "./ToDoItem";

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: toDoData
  //   };
  // }

  updateRemainingTasks() {
    // n => Number of remaining tasks
    // Add new task           -> n = n+1
    // Uncheck task           -> n = n+1
    // Check task             -> n = n-1
    // Delete UNCHECKED task  -> n = n-1
    // Delete CHECKED task    -> n = n
  }

  render() {
    // const filteredTodos = this.state.todos.filter(
    //   item => item.completed === false
    // ).length;

    return (
      <footer className="navbar">
        <p>Remaining tasks: {this.props.remainingItems}</p>
      </footer>
    );
  }
}

export default Footer;
