import React from "react";

class Header extends React.Component {
  state = {
    showInput: false
  };

  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "To do list"
    };
  }

  onChange(e) {
    const pattern = "[0-9]";
    if (e.target.value.match(pattern)) {
      this.setState({
        color: "red"
      });
    } else {
      this.setState({
        color: "whitesmoke",
        title: e.target.value
      });
    }
  }

  displayTitle() {
    return (
      <div>
        <h2>{this.state.title}</h2>
      </div>
    );
  }

  displayInput() {
    return (
      <div>
        <input
          style={{ backgroundColor: this.state.color }}
          className="inputField"
          type="text"
          value={this.state.title}
          onChange={e => {
            this.onChange(e);
          }}
        ></input>
      </div>
    );
  }

  render() {
    const { showInput } = this.state;
    return (
      <header className="navbar">
        <div>{!showInput ? this.displayTitle() : this.displayInput()}</div>

        <button
          className="editBtn"
          onClick={() => this.setState({ showInput: !showInput })}
        >
          {!showInput ? "Edit" : "Save"}
        </button>
      </header>
    );
  }
}

export default Header;
