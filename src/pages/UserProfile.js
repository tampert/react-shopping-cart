import React, { Component } from "react";
import { connect } from "react-redux";
import { update, signout } from "../actions/userActions";
import { showMessage } from "../actions/overLayActions";
import { getUserInfo } from "../localStorage";
import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    const { name, email, password } = getUserInfo();
    this.state = {
      name: name,
      email: email,
      password: password,
    };
  }
  redirectNow = () => {
    this.setState({
      name: "",
    });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.update({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    if (!this.state.name) {
      return <Redirect to="/" />;
    }
    return (
      <div className="profile-form-container">
        <form onSubmit={this.handleSubmit}>
          <ul className="profile-form-items">
            <li>
              <h1>User Profile</h1>
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <button type="submit" className="button primary">
                Update
              </button>
            </li>
            <li>
              <button
                type="button"
                className="button primary"
                onClick={() => {
                  this.props.signout();
                  this.redirectNow();
                }}
              >
                Sign out
              </button>
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
  { update, signout, showMessage }
)(UserProfile);
