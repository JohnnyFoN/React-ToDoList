import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";

// function Main() {
//   const tdItems = toDoData.map(item => <ToDoItem key={item.id} item={item} />);

//   return (
//     <main>
//       <div className="todo-list">{tdItems}</div>
//     </main>
//   );
// }

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="todo-list">{this.props.items}</div>
      </main>
    );
  }
}

export default Main;
