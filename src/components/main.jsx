import React, { Component } from "react";

//Trough the function
/*function ToDoList() {
  return (
    <div>
      <h1>N cool</h1>
      <p>I am cool.</p>
      <ul>
        <li>1 - USA (NY)</li>
        <li>2 - England</li>
        <li>3 - Finland</li>
      </ul>
    </div>
  );
}*/

//Trough the class -- BETTER SAFER
class ToDoList extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <h1>N Cool guy</h1>
        <p>I am cool.</p>
        <ul>
          <li>1 - USA (NY)</li>
          <li>2 - England</li>
          <li>3 - Finland</li>
        </ul>
      </div>
    );
  }
}

export default ToDoList;
