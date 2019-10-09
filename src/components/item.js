import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: toDoData,
      itemText: "Name the item"
    };
  }

  onChange(e) {
    this.setState({
      itemText: e.target.value
    });
  }

  addNewItem() {
    const newId = Math.random();
    const newText = this.state.itemText;
    const newComplited = false;

    const newItem = { id: newId, text: newText, completed: newComplited };

    this.props.addItemToList(newItem);
  }

  render() {
    return (
      <item>
        <div className="newItem">
          <input
            type="text"
            className="inputAddItem"
            onChange={e => {
              this.onChange(e);
            }}
          ></input>
          <button className="btnAddItem" onClick={() => this.addNewItem()}>
            Add
          </button>
        </div>
      </item>
    );
  }
}

export default Item;
