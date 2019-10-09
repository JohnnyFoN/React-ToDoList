import React from "react";
//import toDoData from "../toDoData";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: true
    };
  }

  handleChange(id) {
    this.props.handleChange(this.props.item.id);
  }

  removeItem(item) {
    this.props.removeItem(this.props.item);
  }

  render() {
    const text = this.props.item.text || "Missing text";

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.handleChange(this.props.item.id)}
        />
        <h3>{text}</h3>
        <span
          className="xDelete"
          onClick={() => this.removeItem(this.props.item)}
        >
          &#10008;
        </span>
      </div>
    );
  }
}

export default ToDoItem;
