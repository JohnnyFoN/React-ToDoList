import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import toDoData from "./toDoData";

import TestComponent from "./components/testComponent";

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

/*
 constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>{this.state.loading ? <h1>Loading...</h1> : <TestComponent />}</div>
    );
  }

*/

/* REAL APP



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

*/
