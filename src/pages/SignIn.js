import React from "react";

const SignIn = () => {
  return (
    <div className="signin-form-container">
      <form id="signin-form">
        <ul className="signin-form-items">
          <li>
            <h1>Sign-In</h1>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
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
};
export default SignIn;
