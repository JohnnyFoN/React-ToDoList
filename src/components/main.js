import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";
import Item from "./item";

const FILTER = {
  ALL: {
    value: "all",
    label: "All"
  },
  CHECKED: {
    value: "checked",
    label: "Checked"
  },
  UNCHECKED: {
    value: "unchecked",
    label: "Unchecked"
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: toDoData,
      filter: {
        type: "all"
      }
    };
    this.changeValue = this.changeValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItemToList(item) {
    this.setState({
      todos: [...this.state.todos, item]
    });
  }

  removeItem(item) {
    this.setState({
      todos: this.state.todos.filter(a => a.id !== item.id)
    });
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  changeValue(event) {
    this.setState({
      filter: {
        type: event.target.value
      }
    });
  }

  getFilteredItems() {
    let type = this.state.filter.type;
    let items = this.state.todos || [];
    return items.filter(item => {
      return (
        (type === FILTER.CHECKED.value && item.completed) ||
        (type === FILTER.UNCHECKED.value && !item.completed) ||
        type === FILTER.ALL.value
      );
    });
  }

  render() {
    let items = this.getFilteredItems();

    let itemList = Object.values(FILTER).map((item, i) => {
      return (
        <option className="dropDownValue" key={i} value={item.value}>
          {item.label}
        </option>
      );
    });

    return (
      <main>
        <Item addItemToList={item => this.addItemToList(item)} />
        <div className="comboBox">
          <select
            className="dropDown"
            onChange={this.changeValue}
            value={this.state.filter.type}
          >
            {itemList}
          </select>
        </div>
        <div className="sorts">
          <span className="sortBtn">&#8645; A-Z</span>
        </div>

        <div className="todo-list">
          {items.map(item => (
            <ToDoItem
              key={item.id}
              item={item}
              handleChange={id => {
                this.handleChange(id);
              }}
              removeItem={item => {
                this.removeItem(item);
              }}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
