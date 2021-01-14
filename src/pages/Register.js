import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import { getUserInfo } from "../localStorage";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.repassword) {
      this.props.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      alert("password does not match");
      this.setState({
        repassword: "",
      });
      document.getElementById("repassword").value = "";
    }
  };

  render() {
    if (getUserInfo().name) return <Redirect to="/" />;
    return (
      <div className="register-form-container">
        <form id="signin-form" onSubmit={this.handleSubmit}>
          <ul className="register-form-items">
            <li>
              <h1>Create account</h1>
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                onChange={this.handleInput}
              />
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
              <label htmlFor="repassword">Password</label>
              <input
                type="password"
                name="repassword"
                id="repassword"
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
                Already have an account? <a href="/signin">Sign-in</a>
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
    name: state.user.name,
    email: state.user.email,
    password: state.user.password,
  }),
  { register }
)(Register);
