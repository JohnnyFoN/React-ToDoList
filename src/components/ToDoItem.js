import React from "react";

// function ToDoItem(props) {
//   return (
//     <div className="todo-item">
//       <input type="checkbox" />
//       <h3>{props.item.text}</h3>
//     </div>
//   );
// }

class ToDoItem extends React.Component {
  render() {
    const text = this.props.item.text || "Missing text";
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <h3>{text}</h3>
      </div>
    );
  }
}

export default ToDoItem;
