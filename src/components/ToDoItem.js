import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <h3>{props.item.text}</h3>
    </div>
  );
}

export default ToDoItem;
