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
    return <header className="navbar">{this.state.title}</header>;
  }
}

export default Header;
