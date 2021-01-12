import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import { getUserInfo } from "../localStorage";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signin({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    if (getUserInfo().name) return <Redirect to="/" />;
    return (
      <div className="signin-form-container">
        <form id="signin-form" onSubmit={this.handleSubmit}>
          <ul className="signin-form-items">
            <li>
              <h1>Sign-In</h1>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleInput}
              />
            </li>
            <li>
              <button type="submit" className="button primary">
                Sign-In
              </button>
            </li>
            <li>
              <div>
                New User? <a href="/register">Create you account</a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    email: state.user.email,
    password: state.user.password,
  }),
  { signin }
)(SignInPage);
