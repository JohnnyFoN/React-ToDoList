import React from "react";
import toDoData from "../toDoData";
import ToDoItem from "./ToDoItem";

// function Footer() {
//   return (
//     <footer>
//       <h3>The footer content</h3>
//     </footer>
//   );
// }

class Footer extends React.Component {
  render() {
    return (
      <footer className="navbar">
        <p>Remaining tasks: {this.props.items.length}</p>
      </footer>
    );
  }
}

export default Footer;
