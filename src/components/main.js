import React from "react";
import ToDoItem from "./ToDoItem";

class Main extends React.Component {
  render() {
    const items = this.props.items || [];
    return (
      <main>
        <div className="todo-list">
          {items.map(item => (
            <ToDoItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
