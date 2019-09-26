import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import toDoData from "./toDoData";

class App extends React.Component {
  render() {
    const { itemList } = this.state || {};
    return (
      <div>
        <Header />
        <Main items={toDoData} />
        <Footer items={toDoData} />
      </div>
    );
  }
}

export default App;
