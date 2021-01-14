import React, { Component } from "react";
import { connect } from "react-redux";
import { loading, loaded } from "../actions/overLayActions";

class Overlay extends Component {
  // shows overlay when this.state.loading = active
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
    };
  }

  toggle = () => {
    // this.props.loaded();
    // this.setState({ loading: "" });
  };
  render() {
    return (
      <div>
        <div className={`overlay ${this.state.loading}`} id="loading-overlay">
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
  { loading, loaded }
)(Overlay);
