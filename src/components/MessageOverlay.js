import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessage, hideMessage } from "../actions/overLayActions";

class MessageOverlay extends Component {
  toggle = () => {
    this.props.hideMessage();
  };
  render() {
    const { active, message } = this.props;
    return (
      <div className={`overlay ${active}`}>
        <div>
          <div>{message}</div>
          <button onClick={this.toggle}>close</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    active: state.overLay.showMessage,
    message: state.overLay.message,
  }),
  { showMessage, hideMessage }
)(MessageOverlay);
