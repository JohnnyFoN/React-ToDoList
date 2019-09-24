import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";

function Main() {
  const tdItems = toDoData.map(item => <ToDoItem key={item.id} item={item} />);

  return (
    <main>
      <div className="todo-list">{tdItems}</div>
    </main>
  );
}

export default Main;

/*<input type="checkbox" />
  <p>First thing to do</p>

  <input type="checkbox" />
  <p>Second thing to do</p>

  <input type="checkbox" />
  <p>Third thing to do</p>

  <input type="checkbox" />
  <p>Fourth thing to do</p>*/
