import React from "react";

// function Header() {
//   return <header className="navbar">To do list:</header>;
// }

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "To do list"
    };
  }

  render() {
    return (
      <header className="navbar">
        <input type="text" value={this.state.title}></input>
      </header>
    );
  }
}

export default Header;
