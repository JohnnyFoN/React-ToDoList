import React from "react";
//import toDoData from "../toDoData";

class ToDoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const text = this.props.item.text || "Missing text";

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <h3>{text}</h3>
      </div>
    );
  }
}

export default ToDoItem;
