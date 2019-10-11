import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import toDoData from "./toDoData";

//import TestComponent from "./components/testComponent";

/*const swData = fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(data => console.log(data));*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingItems: toDoData.filter(item => item.completed === false).length
    };
    this.updateRemainingTasks = this.updateRemainingTasks.bind(this);
  }

  updateRemainingTasks(todos) {
    this.setState({
      remainingItems: todos
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          items={toDoData}
          updateRemainingTasks={this.updateRemainingTasks}
        />
        <Footer remainingItems={this.state.remainingItems} />
      </div>
    );
  }
}

export default App;
