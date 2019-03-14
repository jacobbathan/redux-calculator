import React from "react";
import { connect } from "react-redux";

class NumberInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.props.currentInput}
          onChange={event =>
            this.props.setCurrentInput(event.target.valueAsNumber)
          }
        />
        <button onClick={this.props.pushToStack}>Add to stack</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentInput: state.currentInput
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushToStack: () => dispatch({ type: "pushToStack" }),
    setCurrentInput: value =>
      dispatch({ type: "setCurrentInput", value: value })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput);
