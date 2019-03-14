import React from "react";
import { connect } from "react-redux";

class Stack extends React.Component {
  render() {
    return (
      <div className="stack">
        <h3>Stack:</h3>
        {this.props.stack
          .slice()
          .reverse()
          .map(item => (
            <div>{item}</div>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stack: state.stack
  };
}

export default connect(mapStateToProps)(Stack);
