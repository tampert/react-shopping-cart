import React, { Component } from "react";
import { connect } from "react-redux";
import { onLoading, isLoaded } from "../actions/overLayActions";

class Overlay extends Component {
  toggle = () => {
    this.props.isLoaded();
  };
  render() {
    const { active } = this.props;
    return (
      <div className={`overlay ${active}`}>
        <button onClick={this.toggle}>close</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    active: state.overLay.loading,
  }),
  { onLoading, isLoaded }
)(Overlay);
