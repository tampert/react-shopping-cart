import React, { Component } from "react";
import { connect } from "react-redux";
import { onLoading, isLoaded } from "../actions/overLayActions";

class Overlay extends Component {
  toggle = () => {
    this.props.isLoaded();
  };
  render() {
    const { loading } = this.props;
    return (
      <div>
        <div className={`overlay ${loading}`} id="loading-overlay">
          <button onClick={this.toggle}>close</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.overLay.loading,
  }),
  { onLoading, isLoaded }
)(Overlay);
