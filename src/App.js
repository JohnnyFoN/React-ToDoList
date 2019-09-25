import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import toDoData from "./toDoData";
import ToDoItem from "./components/ToDoItem";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: toDoData.map(item => <ToDoItem key={item.id} item={item} />)
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main items={this.state.itemList} />
        <Footer items={this.state.itemList} />
      </div>
    );
  }
}

export default App;
