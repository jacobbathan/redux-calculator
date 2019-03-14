import React from "react";
import { connect } from "react-redux";
import NumberInput from "./NumberInput";

class Controls extends React.Component {
  addButtonClicked = () => {
    this.props.add();
  };

  subtractButtonClicked = () => {
    this.props.subtract();
  };

  render() {
    return (
      <div className="controls">
        <button onClick={this.addButtonClicked}>+</button>
        <button onClick={this.subtractButtonClicked}>-</button>

        <NumberInput />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: "add" }),
    subtract: () => dispatch({ type: "subtract" })
  };
}

export default connect(mapDispatchToProps)(Controls);
