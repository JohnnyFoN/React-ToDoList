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
    this.setState({
      title: e.target.value
    });
  }

  render() {
    const { showInput } = this.state;
    return (
      <header className="navbar">
        <div>
          {!showInput ? (
            <div>
              <h2>{this.state.title}</h2>
            </div>
          ) : (
            <div>
              <input
                className="inputField"
                type="text"
                value={this.state.title}
                onChange={e => {
                  this.onChange(e);
                }}
              ></input>
            </div>
          )}
        </div>

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
