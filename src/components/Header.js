import React from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../localStorage.js";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = getUserInfo();
    // const { name } = this.props;
    return (
      <header>
        <a href="/">React Shopping Cart</a>
        {name ? <a href="/profile">{name}</a> : <a href="/signin">Sign-in</a>}
      </header>
    );
  }
}

export default connect(
  (state) => ({
    name: state.user.name,
  }),
  {}
)(Header);
